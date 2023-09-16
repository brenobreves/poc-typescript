import { db } from "@/database/database.connection";
import { Song } from "@/protocols";
import { QueryResult } from "pg";

async function select(): Promise<Song[]> {
  const result = await db.query<Song>(`
  SELECT * FROM songs ;
`);
  return result.rows;
}

async function insert(title: string, artist: string, album: string ): Promise<void> {
  const insert = await db.query(`
    INSERT INTO songs (title,artist,album) values ($1,$2,$3);
  `,[title, artist, album])
}

export const songsRepository = { select , insert};
