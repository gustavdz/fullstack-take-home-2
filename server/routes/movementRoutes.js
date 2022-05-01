const express = require('express')
const router = express.Router()
const { runMove } = require('../controllers/movementController.js')
router.route('/').post(runMove)

module.exports = router
