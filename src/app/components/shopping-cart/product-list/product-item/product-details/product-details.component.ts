import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    //   this.route.params
    //   .pipe(switchMap((params: Params) => {
    //     return this.productService.getProduct(params['id'])
    //       })).subscribe((product) => {
    //       this.product = product;
    //       console.log(this.product.id);
    //   })
    // }

    this.route.params.subscribe(params => {
      const id = params.id;
      this.productService.getProduct(id).subscribe((product) => {
              this.product = product;
      })

    });
  }
}
