import { Component, OnInit, Input } from '@angular/core';

import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input()
  album?: Album;

  @Input()
  card?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  setSong(trackId: string) {

    if (this.album != undefined) {
      for (let i = 0; i < this.album.tracks.length; i++) {
        if (this.album.tracks[i].id == trackId) {
          this.album.current = i;
          break
        }
      }
    }

  }

}
