import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shorts: any = [
  ]

  constructor(private http: HttpClient, private router: Router, private basketServ: CartService) {
    this.getShort();
  }

  suppr(id: number): void {
    this.http.delete("http://127.0.0.1:8000/api/shorts/remove/" + id)
      .subscribe(data => {
        console.log(data)
        this.getShort()
        this.router.navigate(['/home']);

      });
  }
  getShort() {
    this.http.get("http://127.0.0.1:8000/api/shorts")
      .subscribe((responseShorts: any) => {
        return this.shorts = responseShorts.shorts;
      });
  }
  basketCount() {
    return this.basketServ.getLength();
  }

  addToBasket(short: any) {
    this.basketServ.setBasket(short)

  }

  ngOnInit(): void {
  }

}
