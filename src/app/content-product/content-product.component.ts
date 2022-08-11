import { Component, OnInit } from '@angular/core';
import {TABLE_PRODUCT} from "../models/table";
import {Product} from "../enttity/product";

@Component({
  selector: 'app-content-product',
  templateUrl: './content-product.component.html',
  styleUrls: ['./content-product.component.css']
})
export class ContentProductComponent implements OnInit {
  products: Product[];
  constructor() { }

  ngOnInit(): void {
    this.products = TABLE_PRODUCT;
  }

}
