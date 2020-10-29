const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { asyncHandler, handleValidationErrors } = require("../utils");

const { User, Server, Channel_Message, Channel, Direct_Message, DM_Server, Server_Member, DM_Server_User } = db;

router.get('/', asyncHandler(async (req, res) => {
    const channels = await Channel.findAll({
        where: {
          serverId: Number.parseInt(req.body.serverId),
        }
    })
    res.status(200).json({ channels })
}));

router.post('/', asyncHandler(async(req, res) => {
    const { title, topic, serverId } = req.body;
    const channelInstance = await Channel.create({
      title,
      topic,
      serverId
    });

    const channelToReturn = {
      id: channelInstance.id,
      title: channelInstance.title,
      topic: channelInstance.topic,
      serverId: channelInstance.serverId,
    }

    res.status(200).json(channelToReturn);
}));

module.exports = router;
