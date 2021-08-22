import { Component, OnInit } from '@angular/core';

import { Album } from '../models/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  albumlist: Array<Album> = [ ];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  doSearch(event: any) {
    this.albumlist = this.albumService.searchLocal(event.target.value);
  }

}
