DROP DATABASE IF EXISTS users;
CREATE DATABASE users;
USE users;

CREATE TABLE UserDetails(
    id INTEGER AUTO_INCREMENT,
    firstName VARCHAR (50) NOT NULL,
    secondName VARCHAR (50),
    email VARCHAR (50) INTEGER NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id)
  );

  SET @@time_zone = 'SYSTEM';

  INSERT INTO UserDetails(firstName, secondName, email, created_at)
  VALUES("John", "Doe", "johndoe@gmail.com", (SELECT CURRENT_TIMESTAMP()));