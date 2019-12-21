DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
USE todo_db;

CREATE TABLE todos
(
    id INTEGER
    AUTO_INCREMENT NOT NULL,
todo VARCHAR
    (140) NOT NULL,
PRIMARY KEY
    (id)
);

    INSERT INTO todos
        (todo)
    VALUES
        ('this is a thing');

    INSERT INTO todos
        (todo)
    VALUES
        ('this is another thing');

    SELECT *
    FROM todos;