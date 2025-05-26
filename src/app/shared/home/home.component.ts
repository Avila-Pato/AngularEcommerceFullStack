import { Component } from '@angular/core';
import { ProductOfferComponent } from '../components/product-offer/product-offer.component';
import { Product } from '../models/product';
import { PRODUCTS } from '../../mock/products';
import { HomeProductComponent } from "./components/home-product/home-product.component";

@Component({
  selector: 'app-home',
  imports: [ProductOfferComponent, HomeProductComponent, ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = PRODUCTS;
  productOffers: Product[] = [];
  currentSlide = 0;

  constructor() {
    this.productOffers = this.products.filter(product => product.previusPrice);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.productOffers.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.productOffers.length) % this.productOffers.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}