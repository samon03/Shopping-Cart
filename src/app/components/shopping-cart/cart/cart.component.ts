import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartItemComponent } from '../cart/cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItem = [];

  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });

  }

  addProductToCart(product: Product)
  {

    let productExists = false;

    for(let i in this.cartItem)
    {
        if(this.cartItem[i].productId === product.id)
        {
          this.cartItem[i].quantity++;
          productExists = true;
          break;
        }
    }

    if(!productExists)
    {
      this.cartItem.push({
        productId: product.id,
        productTitle: product.title,
        quantity: 1,
        price: product.price
      });
    }


    this.cartTotal = 0;
    this.cartItem.forEach(item => {
      this.cartTotal += (item.quantity * item.price);
    })
  }



}
