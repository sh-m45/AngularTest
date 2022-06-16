import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:any[] =
    [
      {
        category: "simple",
        id: 1,
        imageUrl: "https://d29c95q8mcesvj.cloudfront.net/catalog/product/cache/415a4d13c7472ffdf4cf179f63aca8d6/2/6/2641-20_1.jpg",
        name: "Milwaukee M18 10oz",
        price: 329
      },
      {
        category: "complex",
        id: 2,
        imageUrl: "https://static-01.daraz.com.bd/p/ec92da1bf24b8ed14d916430bb367ff1.jpg",
        name: "Ironton 7-Pc Set",
        price: 18
      },
      {
        category: "complex",
        id: 3,
        imageUrl: "https://www.kbctools.com/ecomm_images/items/large/1-820-460g.jpg",
        name: "Channellock 10in",
        price: 39
      },
      {
        category: "simple",
        id: 4,
        imageUrl: "https://cdn11.bigcommerce.com/s-8p1uzl4cj9/images/stencil/1280x1280/products/128/441/1__87743.1638230668.png?c=1",
        name: "Performance tool 2-pc",
        price: 3
      },
      {
        category: "complex",
        id: 5,
        imageUrl: "https://www.kbctools.com/ecomm_images/items/large/1-820-460g.jpg",
        name: "12V Max EC Brushless",
        price: 299
      },
      {
        category: "complex",
        id: 6,
        imageUrl: "https://static-01.daraz.com.bd/p/ec92da1bf24b8ed14d916430bb367ff1.jpg",
        name: "Milwaukee M18 10oz",
        price: 199
      },
      {
        category: "simple",
        id: 7,
        imageUrl: "https://d29c95q8mcesvj.cloudfront.net/catalog/product/cache/415a4d13c7472ffdf4cf179f63aca8d6/2/6/2641-20_1.jpg",
        name: "Self-Adjusting Wire Set",
        price: 8
      },
      {
        category: "simple",
        id: 8,
        imageUrl: "https://cdn11.bigcommerce.com/s-8p1uzl4cj9/images/stencil/1280x1280/products/128/441/1__87743.1638230668.png?c=1",
        name: "Rotary Attachment",
        price: 99
      },
    ]

  constructor() { }
}
