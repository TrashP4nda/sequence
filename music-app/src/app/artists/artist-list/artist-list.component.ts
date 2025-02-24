import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ArtistService } from '../../services/artist.service'; 

import { Artist } from '../../services/artist.service';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
  imports: [  
     CommonModule,
      RouterModule,
      MatCardModule,
      MatChipsModule,
      MatIconModule,
      MatListModule,
    ]
})
export class ArtistListComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artistService.getArtists().subscribe({
      next: (data) => this.artists = data,
      error: (err) => console.error('Error fetching artists', err)
    });
  }
}
