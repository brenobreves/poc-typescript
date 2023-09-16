import { Song } from "@/protocols";
import { songsRepository } from "@/repository";

async function read(): Promise<Song[] | string> {
  const result: Song[] = await songsRepository.select();

  const person: Song[] | string =
    result.length > 0
      ? result
      : "No songs registered yet";

  return person;
}

async function create(title: string, artist: string, album: string): Promise<void> {
  await songsRepository.insert(title,artist,album)
}

export const songsService = { read , create};
