import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  addedTowishlist: boolean = false;

  constructor(private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }

  addTocart() {
    this.cartService.addToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
    })
  }

  handleAddToWishlist() {
    this.wishlistService.addTowishlist(this.productItem.id).subscribe(() => {
      this.addedTowishlist = true;
    });
  }

  handleRemoveFromWishlist() {
     this.wishlistService.removeFromwishlist(this.productItem.id).subscribe(() => {
       this.addedTowishlist = false;
     });
  }

}
