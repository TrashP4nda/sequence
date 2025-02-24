import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Artist { 
  id: number;
  name: string;
  bornCity:string;
  birthdate:string;
  img:string;
  rating:number;
  songs:number [];
}

@Injectable({ providedIn: 'root' })
export class ArtistService {
  private apiUrl = 'http://localhost:3000/artists';

  constructor(private http: HttpClient) {}

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl);
  }
}
