const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController");
const apiKeyMiddleware =  require("../config/apiKey")

router.use(apiKeyMiddleware);
/**
 * @swagger
 * tags:
 *   name: Houses
 *   description: Gerenciamento de casas
 */

/**
 * @swagger
 * /api/houses:
 *   get:
 *     summary: Lista todas as casas
 *     tags: [Houses]
 *     responses:
 *       200:
 *         description: Lista de casas
 */
router.get("/", houseController.getAllHouses);

/**
 * @swagger
 * /api/houses/{id}:
 *   get:
 *     summary: Busca casa por ID
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Casa encontrada
 *       404:
 *         description: Casa não encontrada
 */
router.get("/:id", houseController.getHouse);

/**
 * @swagger
 * /api/houses:
 *   post:
 *     summary: Cria uma nova casa
 *     tags: [Houses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               founder:
 *                 type: string
 *     responses:
 *       201:
 *         description: Casa criada
 */
router.post("/", houseController.createHouse);

/**
 * @swagger
 * /api/houses/{id}:
 *   delete:
 *     summary: Deleta uma casa
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Casa deletada
 */
router.delete("/:id", houseController.deleteHouse);

/**
 * @swagger
 * /api/houses/{id}:
 *   put:
 *     summary: Atualiza uma casa
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               founder:
 *                 type: string
 *     responses:
 *       200:
 *         description: Casa atualizada
 */
router.put("/:id", houseController.updateHouse);

module.exports = router;
