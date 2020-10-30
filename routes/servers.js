const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { Server, Channel } = db;

// Find all servers related to logged in user
router.get('/:userId', asyncHandler(async (req, res) => {
    const servers = await Server.findAll({
        where: {
            ownerId: Number.parseInt(req.params.userId),
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
        title: "Home",
        topic: `Welcome to your new Server, ${serverInstance.title}!  This is your Home channel, but feel free to create more!`,
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
