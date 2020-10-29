const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { asyncHandler, handleValidationErrors } = require("../utils");

const { User, Server, Channel_Message, Channel, Direct_Message, DM_Server, Server_Member, DM_Server_User } = db;

// Find all servers related to logged in user
router.get('/:userId', asyncHandler(async (req, res) => {
    const userId = Number.parseInt(req.params.userId);
    const servers = await Server.findAll({
        where: {
            ownerId: userId
        },
        include: { model : Channel }
    })
    res.json({ servers })
}));

router.post('/', asyncHandler(async(req, res) => {
    const { title, userId } = req.body;
    const serverInstance = await Server.create({
        title,
        ownerId: userId,
    });

    const channelInstance = await Channel.create({
        title: "home",
        topic: "Welcome Home!",
        serverId: serverInstance.id,
    })

    const serverToReturn = {
        id: serverInstance.id,
        title: serverInstance.title,
        ownerId: serverInstance.ownerId,
    }

    res.status(200).json(serverToReturn);
}));

module.exports = router;
