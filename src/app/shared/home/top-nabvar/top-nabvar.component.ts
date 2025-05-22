import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-nabvar',
  imports: [CommonModule],
  templateUrl: './top-nabvar.component.html',
  styleUrl: './top-nabvar.component.css'
})
export class TopNabvarComponent {
  isScrolled = false;
  showNavbar = true;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Detecta si ha hecho scroll hacia abajo (es decir, el valor de scroll aumenta)
    if (scrollTop > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }

    const scrollDelta = scrollTop - this.lastScrollTop;

    // Mostrar navbar cuando subes
    if (scrollDelta < 0) {
      this.showNavbar = true;
    }

    // Ocultar navbar cuando bajas
    if (scrollDelta > 10) {
      this.showNavbar = false;
    }

    // Actualiza la posición del scroll para la siguiente comparación
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
