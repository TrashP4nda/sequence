import { Routes } from '@angular/router';
import { SongListComponent } from './songs/song-list/song-list.component';
import { SongDetailComponent } from './songs/song-detail/song-detail.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'songs', pathMatch: 'full' },
    { path: 'songs', component: SongListComponent },
    { path: 'songs/new', component: SongDetailComponent },
    { path: 'songs/:id', component: SongDetailComponent },
    { path: 'artists', component: ArtistListComponent },
  ];
