import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  NavbarComponent, CommonModule],
  standalone: true, 
  templateUrl: './app.component.html',  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-proyecto-angular';
}
