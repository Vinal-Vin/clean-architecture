import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Make it available globally in the app
})
export class UserService {
  private apiUrl = 'https://api.example.com/users'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Method to fetch users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Make a GET request to the API
  }
}
