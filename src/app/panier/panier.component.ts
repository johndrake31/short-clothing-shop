import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})




export class PanierComponent implements OnInit {


  basket: any = []
  organizedBasket: any = [];
  disOrganizedBasket: any = [];

  totalPrice() {
    let total = 0
    if (this.basket) {
      this.basket.forEach((short: any) => {
        total += short.price;
      })
    }
    return total
  };

  // for duplicates how to make it one with a count of items

  removeFromBasket(short: any) {
    this.basketServ.remove(short)
  }


  constructor(private http: HttpClient, private basketServ: CartService) {
    this.basket = this.basketServ.getBasket();
  }

  ngOnInit(): void {
    this.sortBasket();
  }



  sortBasket() {
    let unSortedCart = this.basket;
    let sortedBasket: any = []

    unSortedCart.forEach((shortInChaos: any) => {
      // console.log(shortInChaos);
      // {id: 2, name: "nike basket"...}

      let indexPossible = sortedBasket.findIndex((sortedShort: any) => sortedShort.id == shortInChaos.id)
      // console.log(indexPossible);
      // -1 tout temps
      if (indexPossible >= 0) {

        sortedBasket[indexPossible].qty++

      } else {
        let newShort = {
          id: shortInChaos.id,
          name: shortInChaos.name,
          size: shortInChaos.size,
          color: shortInChaos.color,
          price: shortInChaos.price,
          qty: 1
        }
        sortedBasket.push(newShort);
      }
    });

    console.log(sortedBasket);

    return this.basket = sortedBasket;
  }

}

  // addNewShortPlease(name: string, color: string, size: string) {
  //   this.http.post('www.google.com', {
  //     name: name,
  //     color: color,
  //     size: size
  //   })
  // }