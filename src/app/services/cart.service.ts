import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { cartUrl } from '../config/api';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,
    private productService: ProductService) { }

  getCartItems(): Observable<CartItem[]> {
      return this.http.get<CartItem[]>(cartUrl).pipe(
        map((result: any[]) => {

          let cartItems: CartItem[] = [];

          for(let item of result)
          {
                let productExists = false;

                for(let i in cartItems)
                {
                    if(cartItems[i].productId === item.product.id)
                    {
                      cartItems[i].qty++;
                      productExists = true;
                      break;
                    }
                }

                if(!productExists)
                {
                    cartItems.push(new CartItem(item.id, item.product));
                }
          }
          return cartItems;
        })
      );
  }

  addToCart(product: Product): Observable<any> {
        product.stock = product.stock - 1;
        this.productService.putProduct(product).subscribe();
        return this.http.post(cartUrl, {product});
  }

}
