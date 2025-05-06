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

    this.isScrolled = scrollTop > 100;

    const scrollDelta = scrollTop - this.lastScrollTop;

    if(scrollDelta > 20) {
      this.showNavbar = false;
    } else if (scrollDelta < -20 && scrollTop < document.body.scrollHeight * 0.7) {
      this.showNavbar = true;
    }

    this.lastScrollTop = scrollTop;
  }
}
