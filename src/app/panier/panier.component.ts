import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})

export class PanierComponent implements OnInit {
  basket: any = []

  totalPrice() {
    let total = 0
    if (this.basket) {
      this.basket.forEach((short: any) => {
        total += short.price;
      })
    }
    return total
  };


  removeFromBasket(short: any) {
    this.basketServ.remove(short)
  }

  @Input() short: any = {};

  constructor(private http: HttpClient, private basketServ: CartService) {

  }

  ngOnInit(): void {
    this.basket = this.basketServ.getBasket();
  }
}

  // addNewShortPlease(name: string, color: string, size: string) {
  //   this.http.post('www.google.com', {
  //     name: name,
  //     color: color,
  //     size: size
  //   })
  // }