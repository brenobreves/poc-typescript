export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
};

export type createSong = Omit<Song ,"id">
