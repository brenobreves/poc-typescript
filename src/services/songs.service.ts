import { Song, createSong } from "@/protocols";
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

async function update(id:number, song: createSong): Promise<void> {
  const songExists = await checkSong(id)
  if(!songExists) throw {message:`Song not found`}
  await songsRepository.update(id, song)
}

async function checkSong(id:number): Promise<boolean> {
  const queryRowCount = await songsRepository.getById(id)
  if(queryRowCount === 0) return false
  return true
}

async function del(): Promise<void> {
  await songsRepository.del()
}

export const songsService = { read , create , update, del};
