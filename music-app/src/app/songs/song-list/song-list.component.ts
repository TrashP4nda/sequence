
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Song, SongService } from '../../services/song.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
  imports: [CommonModule, MatListModule, RouterModule]
})
export class SongListComponent implements OnInit {
  songs: Song[] = [];

  constructor(
    private songService: SongService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.songService.getSongs().subscribe({
      next: (data) => this.songs = data,
      error: (err) => console.error('Error fetching songs', err)
    });
  }

  goToDetail(songId: number) {
    this.router.navigate(['/songs', songId]);
  }
}
