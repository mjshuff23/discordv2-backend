**Backend Endpoints**

- `/` - Splash page with login form
- `/login` - Log in the user
- `/signup` - Splash page with signup form
- `/signup/create` - Create a new user
- `/app` - Main page for logged in user, displaying servers, channels, friends, etc..

---

## Channel Endpoints

- `/channels/:serverId` - Head to Server based on id
- `/channels/:serverId/:channelId` - Head to specific channel
- `/channels/:serverId/add` - Add a new channel
- `/channels/:serverId/:channelId/delete` - Delete channel
- `/channels/:serverId/:channelId/send` - Send message to channel
- `/channels/:serverId/:channelId/react` - React to specific message in Channel

---

## DM Endpoints

- `/channels/@me/:channelId` - Head to DM based on id
- `/channels/@me/:channelId/send` - Send message to private group DM
- `/channels/@me/:channelId/:messageId/react` - React to specific message in DM
- `/channels/@me/:channelId/:messageId/delete` - Delete selected channel
