"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Todos_1 = require("../models/Todos");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "Emforhs13!",
    database: "todos",
    logging: false,
    models: [Todos_1.Todos],
});
exports.default = connection;
