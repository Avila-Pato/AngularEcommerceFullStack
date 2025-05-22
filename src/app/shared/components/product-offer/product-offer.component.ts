import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-product-offer',
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './product-offer.component.html',
  styleUrl: './product-offer.component.css'
  
})
export class ProductOfferComponent  implements OnInit {
  
 product: Product  = {
    id: '1',
    name: 'Notebook Pro 14',
    description: 'Immmerse yourself in the world of technology with the new Notebook Pro 14. With a stunning 14-inch display, this laptop offers an immersive experience for work and play. <p><ul><li>14-inch display</li><li>Intel Core i7 processor</li><li>16GB RAM</li><li>512GB SSD</li></ul></p> adjustable to your needs. Whether you are a student, a professional or a gamer, this laptop is the perfect choice for you. also has a long-lasting battery, so you can work or play for hours without worrying about running out of power. <p><ul><li>14-inch display</li><li>Intel Core i7 processor</li><li>16GB RAM</li><li>512GB SSD</li></ul></p>',
    urlImage: 'https://pngimg.com/uploads/laptop/laptop_PNG101766.png',
    reviews: 4.5,
    price: 199.990,
    previusPrice: 299.99, 
 }
 discount = 0;
 // Inyectar el servicio DomSanitizer para poder usarlo en el componente
 // El servicio DomSanitizer permite sanitizar el HTML para evitar ataques XSS

 // Problemas posibles: Si no usas DomSanitizer,  descripción con listas y formatos no se renderizará correctamente desde un diccionario.
  constructor(private sanitizer: DomSanitizer) {}

 ngOnInit() {
  const previusPrice = this.product.previusPrice
  const price = this.product.price

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