import { Component, AfterViewInit } from '@angular/core';
import { ProductOfferComponent } from '../components/product-offer/product-offer.component';
import { Product } from '../models/product';
import { PRODUCTS } from '../../mock/products';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home',
  imports: [ProductOfferComponent],
  standalone: true, 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  products: Product[] = PRODUCTS;
  productOffers: Product[] = [];

  constructor() {
    this.productOffers = this.products.filter(
      (product) => product.previusPrice
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
        initFlowbite();
    }, 0);
}
}