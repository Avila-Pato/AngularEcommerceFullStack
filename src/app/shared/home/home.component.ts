import { Component } from '@angular/core';
import { ProductOfferComponent } from '../components/product-offer/product-offer.component';


@Component({
  selector: 'app-home',
  imports: [ProductOfferComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

