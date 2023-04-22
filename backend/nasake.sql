CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(320) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password CHAR(60) NOT NULL,
    createdOn DATETIME NOT NULL,
    id CHAR(32) NOT NULL
);

CREATE TABLE IF NOT EXISTS journals (
    id CHAR(32) PRIMARY KEY,
    content TEXT NOT NULL,
    createdOn DATETIME NOT NULL,
    sentiment TEXT NOT NULL,
    emotion TEXT NOT NULL,
    CONSTRAINT fk_id
        FOREIGN KEY(id) REFERENCES users(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
)