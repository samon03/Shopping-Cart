import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  product: Product[] = [
    {
      "id": 1,
      "title": "Tempor",
      "description": "Minim enim deserunt id aliquip tempor elit amet culpa voluptate officia pariatur voluptate adipisicing. Enim ex anim enim voluptate minim esse. Dolore dolore ad nostrud sint. Adipisicing ex voluptate veniam in elit pariatur irure pariatur tempor irure ex amet quis. Proident incididunt non qui consequat duis Lorem in labore sunt Lorem adipisicing anim eiusmod. Nisi Lorem nostrud deserunt reprehenderit enim quis eu duis minim enim. Eiusmod anim voluptate dolore exercitation qui cupidatat nostrud pariatur.\r\nId laborum velit Lorem culpa. Ipsum velit laboris est laborum minim exercitation. Pariatur esse occaecat occaecat duis eiusmod reprehenderit labore commodo officia ea. Labore ut labore ad in. Elit consequat do fugiat sit. Ex eu dolor nulla quis ipsum. Adipisicing velit duis excepteur fugiat.",
      "imageUrl": "https://ae01.alicdn.com/kf/HTB1ak_Sq25TBuNjSspcq6znGFXaw/2018-Colorful-Big-Feathers-Handmade-Dream-catcher-Bedroom-Decoration-Dreamcatchers-Wind-Chimes-Wall-Hanging-Decoration.jpg",
      "price": 100
    },
    {
      "id": 2,
      "title": "Labore",
      "description": "Minim enim deserunt id aliquip tempor elit amet culpa voluptate officia pariatur voluptate adipisicing. Enim ex anim enim voluptate minim esse. Dolore dolore ad nostrud sint. Adipisicing ex voluptate veniam in elit pariatur irure pariatur tempor irure ex amet quis. Proident incididunt non qui consequat duis Lorem in labore sunt Lorem adipisicing anim eiusmod. Nisi Lorem nostrud deserunt reprehenderit enim quis eu duis minim enim. Eiusmod anim voluptate dolore exercitation qui cupidatat nostrud pariatur.\r\nId laborum velit Lorem culpa. Ipsum velit laboris est laborum minim exercitation. Pariatur esse occaecat occaecat duis eiusmod reprehenderit labore commodo officia ea. Labore ut labore ad in. Elit consequat do fugiat sit. Ex eu dolor nulla quis ipsum. Adipisicing velit duis excepteur fugiat.\r\n",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0006/0158/7777/products/Dark_Blue_large_Dreamcatcher1_1024x1024.png?v=1532288597",
      "price": 120
    }
    ,
    {
      "id": 3,
      "title": "Eiusmod",
      "description": "Minim enim deserunt id aliquip tempor elit amet culpa voluptate officia pariatur voluptate adipisicing. Enim ex anim enim voluptate minim esse. Dolore dolore ad nostrud sint. Adipisicing ex voluptate veniam in elit pariatur irure pariatur tempor irure ex amet quis. Proident incididunt non qui consequat duis Lorem in labore sunt Lorem adipisicing anim eiusmod. Nisi Lorem nostrud deserunt reprehenderit enim quis eu duis minim enim. Eiusmod anim voluptate dolore exercitation qui cupidatat nostrud pariatur.\r\nId laborum velit Lorem culpa. Ipsum velit laboris est laborum minim exercitation. Pariatur esse occaecat occaecat duis eiusmod reprehenderit labore commodo officia ea. Labore ut labore ad in. Elit consequat do fugiat sit. Ex eu dolor nulla quis ipsum. Adipisicing velit duis excepteur fugiat.\r\n",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.nP5BavlseNNiRtDqu4xTtwHaHa&pid=Api",
      "price": 150
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.product;
  }
}
