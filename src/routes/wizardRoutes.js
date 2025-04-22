const express = require("express");
const router = express.Router();
const wizardController = require("../controllers/wizardController");
const upload = require("../config/upload.js"); // crie a pasta middleware e o arquivo upload.js
const apiKeyMiddleware = require('../config/apiKey.js')


router.use(apiKeyMiddleware);
/**
 * @swagger
 * tags:
 *   name: Wizards
 *   description: Gerenciamento de bruxos
 */

/**
 * @swagger
 * /api/wizards:
 *   get:
 *     summary: Lista todos os bruxos
 *     tags: [Wizards]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de bruxos
 */
router.get("/", wizardController.getAllWizards);

/**
 * @swagger
 * /api/wizards/{id}:
 *   get:
 *     summary: Busca bruxo por ID
 *     tags: [Wizards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Bruxo encontrado
 *       404:
 *         description: Bruxo não encontrado
 */
router.get("/:id", wizardController.getWizard);

/**
 * @swagger
 * /api/wizards:
 *   post:
 *     summary: Cria um novo bruxo
 *     tags: [Wizards]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               house_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Bruxo criado
 */
router.post("/", upload.single("photo"), wizardController.createWizard);


/**
 * @swagger
 * /api/wizards/{id}:
 *   delete:
 *     summary: Deleta um bruxo
 *     tags: [Wizards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Bruxo deletado
 */
router.delete("/:id", wizardController.deleteWizard);

/**
 * @swagger
 * /api/wizards/{id}:
 *   put:
 *     summary: Atualiza um bruxo
 *     tags: [Wizards]
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
 *               house_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Bruxo atualizado
 */
router.put("/:id", wizardController.updateWizard);

module.exports = router;
