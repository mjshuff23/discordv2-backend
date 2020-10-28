const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { asyncHandler, handleValidationErrors } = require("../utils");

const { User, Server, Channel_Message, Channel, Direct_Message, DM_Server, Server_Member, DM_Server_User } = db;

router.get('/', asyncHandler(async(req, res) => {
    const servers = await Server_Member.findByPk(1)
    res.json({ servers })
}));

router.post('/', asyncHandler(async(req, res) => {

}));

module.exports = router;