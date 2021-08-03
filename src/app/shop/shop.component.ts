import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shortTbl: any = null;
  shorts: any = [
  ]

  constructor(private http: HttpClient) {

    this.http.get("http://127.0.0.1:8000/api/shorts")
      .subscribe((responseShorts: any) => {
        return this.shorts = responseShorts.shorts;
      });
  }

  ngOnInit(): void {
  }

}
