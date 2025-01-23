import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; // Import the service to get user data

@Component({
  selector: 'app-user-list',
  standalone: true, // Mark as a standalone component
  imports: [], // Import CommonModule for directives like *ngFor if needed
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Array to store users
  error: string = ''; // String to store any error message

  constructor(private userService: UserService) {}

  // Fetch user data when component initializes
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data; // Store the response data
      },
      (err) => {
        this.error = 'Error loading users'; // Set error message if the request fails
        console.error(err);
      }
    );
  }
}
