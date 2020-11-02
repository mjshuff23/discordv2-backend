# Dischord Data Schema

## Users

| attribute name | data type   | details               |
| -------------- | ----------- | --------------------- |
| id             | integer     | primary key, not null |
| username       | varchar(25) | not null, unique      |
| email          | varchar(40) | not null, unique      |
| hashedPassword | varchar     | not null, (binary)    |
| avatarUrl      | varchar     |                       |
| phone          | varchar(25) |                       |

## Servers

| attribute name | data type    | details               |
| -------------- | ------------ | --------------------- |
| id             | integer      | primary key, not null |
| title          | varchar(100) | not null              |

## ServerMembers

| attribute name | data type | details               |
| -------------- | --------- | --------------------- |
| id             | integer   | primary key, not null |
| serverId       | integer   | foreign key, not null |
| userId         | integer   | foreign key, not null |

## ServerModerators

| attribute name | data type | details               |
| -------------- | --------- | --------------------- |
| id             | integer   | primary key, not null |
| serverId       | integer   | foreign key, not null |
| userId         | integer   | foreign key, not null |

## Channels

| attribute name | data type     | details               |
| -------------- | ------------- | --------------------- |
| id             | integer       | primary key, not null |
| title          | varchar(100)  | not null              |
| topic          | varchar(1024) |                       |
| serverId       | integer       | foreign key, not null |

## ChannelMessages

| attribute name | data type     | details               |
| -------------- | ------------- | --------------------- |
| id             | integer       | primary key, not null |
| channelId      | integer       | foreign key, not null |
| userId         | integer       | foreign key, not null |
| body           | varchar(2000) | not null              |
| createdAt      | timestamp     | not null              |

## Pins

| attribute name   | data type | details               |
| ---------------- | --------- | --------------------- |
| id               | integer   | primary key, not null |
| channelId        | integer   | not null, foreign key |
| channelMessageId | integer   | not null, foreign key |

## Reactions

| attribute name   | data type | details               |
| ---------------- | --------- | --------------------- |
| id               | integer   | not null, primary key |
| channelMessageId | integer   | foreign key           |
| directMessageId  | integer   | foreign key           |
| userId           | integer   | not null, foreign key |
| unicodeVal       | varchar   | not null              |

## GroupMembers

| attribute name | data type | details               |
| -------------- | --------- | --------------------- |
| id             | integer   | not null, primary key |
| directGroupId  | integer   | not null, foreign key |
| userId         | integer   | not null, foreign key |

## DirectGroups

| attribute name | data type | details               |
| -------------- | --------- | --------------------- |
| id             | integer   | not null, primary key |

## DirectMessages

| attribute name | data type    | details               |
| -------------- | ------------ | --------------------- |
| id             | integer      | not null, primary key |
| directGroupId  | integer      | not null, foreign key |
| userId         | integer      | not null, foreign key |
| body           | varchar(500) | not null              |
| createdAt      | date         |                       |
