import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './shared/home/home.component';
import { TopNabvarComponent } from './shared/top-nabvar/top-nabvar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  NavbarComponent, CommonModule, HomeComponent, TopNabvarComponent],
  standalone: true, 
  templateUrl: './app.component.html',  
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'mi-proyecto-angular';
}
