CREATE TABLE IF NOT EXISTS users (
    `email`     VARCHAR(320)    PRIMARY KEY,
    `name`      VARCHAR(100)    NOT NULL,
    `password`  CHAR(60)        NOT NULL,
    `createdOn` DATETIME        NOT NULL,
    `id`        CHAR(32)        NOT NULL
);

CREATE TABLE IF NOT EXISTS `journals` (
    `id`        CHAR(32)    REFERENCES users(id),
    `content`   TEXT        NOT NULL,
    `createdOn` DATETIME    NOT NULL,
    `sentiment` TEXT        NOT NULL,
    `emotion`   TEXT        NOT NULL
);

CREATE TABLE IF NOT EXISTS `support_group` (
  `name`    VARCHAR(50)     DEFAULT NULL,
  `city`    VARCHAR(20)     DEFAULT NULL,
  `type`    VARCHAR(5)      DEFAULT NULL,
  `meets`   VARCHAR(100)    DEFAULT NULL,
  `medium`  VARCHAR(8)      DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `therapist` (
  `name`        VARCHAR(20) DEFAULT NULL,
  `since_year`  INT         DEFAULT NULL,
  `city`        VARCHAR(20) DEFAULT NULL,
  `fee`         INT         DEFAULT NULL,
  `medium`      VARCHAR(8)  DEFAULT NULL
)
