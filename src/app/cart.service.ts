import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  basket: any = [];

  remove(short:any){
    this.basket.splice(this.basket.indexOf(short), 1);
  }
  getBasket(): Observable<any> {
    return this.basket;
  }
  getLength(): Observable<any> {
    return this.basket.length
  }
  setBasket(short: any): void {
    this.basket.push(short);
  }

}
