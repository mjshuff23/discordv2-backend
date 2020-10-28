const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { asyncHandler, handleValidationErrors } = require("../utils");

const { User, Server, Channel_Message, Channel, Direct_Message, DM_Server } = db;

router.get('/', asyncHandler(async(req, res) => {
    const servers = await Server.findAll({ include: Channel })
    res.json({ servers })
}));

router.post('/', asyncHandler(async(req, res) => {

}));

module.exports = router;