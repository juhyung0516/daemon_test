import { json, urlencoded } from "body-parser";
import express from "express";
import connection from "./db/config";
const app = express();
import todoRoutes from "./routes/todos";

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/todos", todoRoutes);
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Database synced Successfully");
  })
  .catch((err) => {
    console.log("Err", err);
  });

app.listen(3000);
