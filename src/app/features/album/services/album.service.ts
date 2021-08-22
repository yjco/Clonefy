import { Injectable } from '@angular/core';

import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums: Array<Album> = [

    {
      id: "giaa-aivaib",
      title: "All is Violent, All is Bright",
      img: "../assets/covers/giaa-aivaib.png",
      artist: "God is an Astronaut",
      tracks: [
        {
          name: "Fragile",
          length: 273,
          id: "fragile",
          link: "../assets/audio/Fragile.mp3"
        },
        {
          name: "All is Violent, All is Bright",
          length: 251,
          id: "allisviolentallisbright",
          link: "../assets/audio/All is Violent, All is Bright.mp3"
        },
        {
          name: "Forever Lost",
          length: 380,
          id: "foreverlost",
          link: "../assets/audio/Forever Lost.mp3"
        },
        {
          name: "Fireflies and Empty Skies",
          length: 241,
          id: "firefliesandemptyskies",
          link: "../assets/audio/Fireflies And Empty Skies.mp3"
        },
        {
          name: "A Deafening Distance",
          length: 228,
          id: "adeafeningdistance",
          link: "../assets/audio/A Deafening Distance.mp3"
        },
        {
          name: "Infinite Horizons",
          length: 145,
          id: "infinitehorizons",
          link: "../assets/audio/Infinite Horizons.mp3"
        },
        {
          name: "Suicide by Star",
          length: 272,
          id: "suicidebystar",
          link: "../assets/audio/Suicide by Star.mp3"
        },
        {
          name: "Remembrance Day",
          length: 253,
          id: "remembranceday",
          link: "../assets/audio/Remembrance Day.mp3"
        },
        {
          name: "Dust And Echoes",
          length: 253,
          id: "dustandechoes",
          link: "../assets/audio/Dust And Echoes.mp3"
        },
        {
          name: "When Everything Dies",
          length: 366,
          id: "wheneverythingdies",
          link: "../assets/audio/When Everything Dies.mp3"
        }
      ],
      current: 0
    }

  ];

  constructor() { }

  searchLocal(title: string) {
    return (title == "") ? [ ] : this.albums.filter(
      (album) => album.title.toUpperCase().search(title.toUpperCase()) > -1);
  }

  getByTitle(title: string) {
    return this.albums.find((album) => album.title === title);
  }

  getById(id: string) {
    return this.albums.find((album) => album.id === id);
  }

}
