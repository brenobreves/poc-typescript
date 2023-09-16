import { db } from "@/database/database.connection";
import { Song, createSong } from "@/protocols";
import { QueryResult } from "pg";

async function select(): Promise<Song[]> {
  const result = await db.query<Song>(`
  SELECT * FROM songs ;
`);
  return result.rows;
}

async function insert(title: string, artist: string, album: string ): Promise<void> {
  const insert = await db.query<Song>(`
    INSERT INTO songs (title,artist,album) values ($1,$2,$3);
  `,[title, artist, album])
}

async function update(id: number, song: createSong) {
  const update = await db.query<Song>(`
    UPDATE songs SET title=$2, artist=$3, album=$4 WHERE id=$1
  ;`,[id, song.title , song.artist , song.album])  
}

async function getById(id:number): Promise<number> {
  const query = await db.query<Song>(`
    SELECT * FROM songs WHERE id=$1
  ;`,[id])
  return query.rowCount
}

async function del(): Promise<void> {
  const deleted =  await db.query<Song>(`DELETE FROM songs WHERE id>0;`)
}

export const songsRepository = { select , insert , update , getById, del};
