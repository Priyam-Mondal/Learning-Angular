import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log('Product service');
  }
  getProductData() {
    return [
      {
        name: 'mobile',
        brand: 'samsung',
      },
      {
        name: 'laptop',
        brand: 'dell',
      },
    ];
  }
}
