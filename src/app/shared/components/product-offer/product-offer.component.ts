import { Component } from '@angular/core';

@Component({
  selector: 'app-product-offer',
  imports: [],
  templateUrl: './product-offer.component.html',
  styleUrl: './product-offer.component.css'
})
export class ProductOfferComponent {
 product  = {
    id: '1',
    name: 'Notebook Pro 14',
    description: 'Immmerse yourself in the world of technology with the new Notebook Pro 14. With a stunning 14-inch display, this laptop offers an immersive experience for work and play. <p><ul><li>14-inch display</li><li>Intel Core i7 processor</li><li>16GB RAM</li><li>512GB SSD</li></ul></p> adjustable to your needs. Whether you are a student, a professional or a gamer, this laptop is the perfect choice for you. also has a long-lasting battery, so you can work or play for hours without worrying about running out of power. <p><ul><li>14-inch display</li><li>Intel Core i7 processor</li><li>16GB RAM</li><li>512GB SSD</li></ul></p>',
    urlImage: 'https://cdn.pixabay.com/photo/2015/12/26/02/01/mac-1108183_1280.jpg',
    reviews: 4.5,
    price: 1999.99,
    previusPrice: 2499.99, 
 }
}
