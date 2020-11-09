import { strict } from 'assert';

export class Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;

  constructor(id, title, description = '', imageUrl = 'https://hative.com/wp-content/uploads/2016/05/dreamcatcher/3-dreamcatcher.jpg', price = 0)
  {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}
