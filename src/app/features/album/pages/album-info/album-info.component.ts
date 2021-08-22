import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent implements OnInit {

  album?: Album;

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.album = this.albumService.getById(params.id);
    });
  }

}
