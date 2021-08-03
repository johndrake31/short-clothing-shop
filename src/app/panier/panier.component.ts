import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  shorts = [
    {
      "id": 2,
      "name": "nike basket",
      "size": "lg",
      "color": "blue",
      "price": 9

    },
    {
      "id": 3,
      "name": "play soft",
      "size": "sm",
      "color": "pink",
      "price": 13
    },
    {
      "id": 4,
      "name": "Adventure",
      "size": "med",
      "color": "black",
      "price": 14
    }

  ];

  constructor(private http: HttpClient) {

  }
  @Input() shortObj: any;

  ngOnInit(): void {
  }

}
