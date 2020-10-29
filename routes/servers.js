const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { asyncHandler, handleValidationErrors } = require("../utils");

const { User, Server, Channel_Message, Channel, Direct_Message, DM_Server, Server_Member, DM_Server_User } = db;

// Find all servers related to logged in user
router.get('/', asyncHandler(async(req, res) => {
    const servers = await Server.findAll({
        where: {
            ownerId: Number.parseInt(req.body.ownerId)
        }
    })
    res.json({ servers })
}));

router.post('/', asyncHandler(async(req, res) => {
    const { title, ownerId } = req.body;
    const serverInstance = await Server.create({
        title,
        ownerId,
    });

    const serverToReturn = {
        id: serverInstance.id,
        title: serverInstance.title,
        ownerId: serverInstance.ownerId,
    }

    res.status(200).json(serverToReturn);
}));

module.exports = router;
