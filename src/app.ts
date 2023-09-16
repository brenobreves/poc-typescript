import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import { router } from "@/routes";
import { errorHandler } from "@/middlewares";
dotenv.config();

const app = express();

app.use(json()).use(router).use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
