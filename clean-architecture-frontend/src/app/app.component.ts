import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { UserListComponent } from './components/user-list.component'; // Import the UserListComponent

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clean-architecture-frontend';
}
