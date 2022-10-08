import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/Todos";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "Emforhs13!",
  database: "todos",
  logging: false,
  models: [Todos],
});

export default connection;
