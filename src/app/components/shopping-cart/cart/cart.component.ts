import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartItemComponent } from '../cart/cart-item/cart-item.component';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItem = [];

  cartTotal = 0;

  constructor(private msg: MessengerService,
    private cartService: CartService) { }

  ngOnInit(): void {
      this.handleSubscription();
      this.loadCartitems();
  }

  handleSubscription()
  {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartitems();
    });
  }

  loadCartitems()
  {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItem = items;
      this.calculateTotal();
    });
  }

  calculateTotal()
  {
    this.cartTotal = 0;
    this.cartItem.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    })
  }

}
