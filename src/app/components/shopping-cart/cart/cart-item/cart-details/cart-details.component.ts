import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  cartItem = [];
  cartTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
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
