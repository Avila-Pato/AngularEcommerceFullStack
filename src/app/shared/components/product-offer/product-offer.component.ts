import { CommonModule, CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, input , NgModule, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-product-offer',
  imports: [CurrencyPipe, PercentPipe, CommonModule],
  templateUrl: './product-offer.component.html',
  styleUrl: './product-offer.component.css'
  
})
export class ProductOfferComponent  implements OnInit {
  
 product = input.required<Product>();
 discount = 0;
 // Inyectar el servicio DomSanitizer para poder usarlo en el componente
 // El servicio DomSanitizer permite sanitizar el HTML para evitar ataques XSS

 // Problemas posibles: Si no usas DomSanitizer,  descripción con listas y formatos no se renderizará correctamente desde un diccionario.
  constructor(private sanitizer: DomSanitizer) {}

 ngOnInit() {
  const previusPrice = this.product().previusPrice
  const price = this.product().price

  if (previusPrice) {
    this.discount = (previusPrice - price) / previusPrice 
  }
 }
// metodo getSafeHtml() 
//SafeHtml: Tipo especial de Angular que indica que el HTML es seguro para renderizar.
//bypassSecurityTrustHtml(): Método que marca explícitamente el HTML como confiable (útil cuando tú controlas el contenido, como en tus descripciones de productos).
 getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

//basicamente  se usa   [innerHTML]="getSafeHtml(...)" para que la  descripción con HTML (<p>, <ul>, <li>, <b>, etc.) se renderice correctamente en Angular desde un mock de datos osea un diccionario.
// sera asi <div class="mt-2" [innerHTML]="getSafeHtml(product.description)"></div>