import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongService, Song } from '../../services/song.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  standalone: true,
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss'],
  imports: [FormsModule] 
})
export class SongDetailComponent implements OnInit {
  songId?: number;
  song: Song = {
    title: '', artist: 0, genre: [],
    poster: '',
    year: 0,
    duration: 0,
    rating: 0,
    id: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.songId = +idParam;
      // fetch existing from API
      this.songService.getSong(this.songId).subscribe({
        next: (data) => this.song = data,
        error: (err) => console.error('Error loading song:', err)
      });
    }
  }

  saveSong(): void {
    if (this.songId) {
      // update
      this.songService.updateSong(this.song).subscribe({
        next: () => this.router.navigate(['/songs']),
        error: (err) => console.error('Error updating song:', err)
      });
    } else {
      // create
      this.songService.createSong(this.song).subscribe({
        next: () => this.router.navigate(['/songs']),
        error: (err) => console.error('Error creating song:', err)
      });
    }
  }
}
