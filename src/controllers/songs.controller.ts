import { Request, Response, request } from "express";
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
  res.status(httpStatus.CREATED).send(`New song succesfully added`) 
}

async function update(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);
  const song = req.body as createSong;
  await songsService.update(id, song)
  res.status(httpStatus.OK).send(`Song with id: ${id} successfully updated`)
}

async function del(req: Request, res: Response ): Promise<void> {
  await songsService.del()
  res.status(httpStatus.OK).send(`Songs from playlist deleted`)
}

export const songsController = { read , create , update, del};
