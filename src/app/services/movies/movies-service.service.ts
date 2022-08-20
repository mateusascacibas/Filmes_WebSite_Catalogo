import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  url = 'https://api.themoviedb.org/'
  apiKey = 'b6f5ab1fe6c171a61e5fb12a5a0b4efa'
  constructor(private http: HttpClient) { }
}
