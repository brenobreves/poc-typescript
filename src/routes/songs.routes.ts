import { Router } from "express";
import { songsController } from "@/controllers";
import { validateSchema } from "@/middlewares/validateSchema.middleware";
import songSchema from "@/schemas/songSchema";

export const songsRouter = Router();

songsRouter.get("/songs", songsController.read);
songsRouter.post("/songs",validateSchema(songSchema), songsController.create)

