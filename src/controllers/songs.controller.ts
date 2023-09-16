import { Request, Response } from "express";
import httpStatus from "http-status";
import { Song, createSong } from "@/protocols";
import { songsService } from "@/services";

async function read(req: Request, res: Response): Promise<void> {
  const result: Song[] | string = await songsService.read();
  res.status(httpStatus.OK).send(result);
}

async function create(req: Request, res: Response):Promise<void> {
  const newSong = req.body as createSong;
  await songsService.create(newSong.title, newSong.artist, newSong.album) 
  res.status(httpStatus.CREATED).send(`Nova música criada com sucesso`) 
}

export const songsController = { read , create};
