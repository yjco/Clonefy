export interface Track {
  id: string;
  name: string;
  link: string;
  length: number;
}

export interface Album {
  id: string;
  title: string;
  img: string;
  artist: string;
  tracks: Array<Track>;
  current: number;
}
