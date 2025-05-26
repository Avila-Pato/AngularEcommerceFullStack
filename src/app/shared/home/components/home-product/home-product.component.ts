import { Component, input } from '@angular/core';
import { Product } from '../../../models/product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home-product',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.css'
})
export class HomeProductComponent {
product = input.required<Product>();

 constructor(private sanitizer: DomSanitizer) {}
 getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
