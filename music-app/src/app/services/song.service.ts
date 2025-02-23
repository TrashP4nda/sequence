import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

export interface Song {
  id: number;
  title: string;
  poster: string;
  artist: number;
  genre: string [];
  year: number;
  duration:number;
  rating:number;
  artistname?:string;
}

export interface Artist { 
  id: number;
  name: string;
  bornCity:string;
  birthdate:string;
  img:string;
  rating:number;
  songs:number [];
}

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrlSongs = 'http://localhost:3000/songs';
  private apiUrlArtists = 'http://localhost:3000/artists';

  constructor(private http: HttpClient) {}

   getSongs(): Observable<Song[]> {
    return forkJoin({
      songs: this.http.get<Song[]>(this.apiUrlSongs),
      artists: this.http.get<Artist[]>(this.apiUrlArtists)
    }).pipe(
      map(({ songs, artists }) => {
        return songs.map(song => ({
          ...song,
          artistname: artists.find(artist => Number(artist.id) === Number(song.artist))?.name || 'Unknown'
        }));
      })
    );
  }

  getSong(id: number): Observable<Song> {
    return forkJoin({
      song: this.http.get<Song>(`${this.apiUrlSongs}/${id}`),
      artists: this.http.get<Artist[]>(this.apiUrlArtists)
    }).pipe(
      map(({ song, artists }) => ({
        ...song,
        artistName: artists.find(artist => artist.id === song.artist)?.name || 'Unknown'
      }))
    );
  }

  createSong(song: Song): Observable<Song> {
    return this.http.post<Song>(this.apiUrlSongs, song);
  }

  updateSong(song: Song): Observable<Song> {
    return this.http.put<Song>(`${this.apiUrlSongs}/${song.id}`, song);
  }

  deleteSong(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlSongs}/${id}`);
  }
}
