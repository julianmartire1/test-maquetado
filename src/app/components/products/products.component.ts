import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [
    { id: 1, image: '/assets/productos/zapatilla_1.jpg', title: 'Zapatilla 1-XFX', price: 5000 },
    { id: 2, image: '/assets/productos/zapatilla_2.jpg', title: 'Zapatilla 2000-X', price: 9800 },
    { id: 3, image: '/assets/productos/zapatilla_3.jpg', title: 'Zapatilla 3 Run', price: 6500 },
    { id: 4, image: '/assets/productos/zapatilla_3.jpg', title: 'Zapatilla 3 Run', price: 6500 },
    { id: 5, image: '/assets/productos/zapatilla_1.jpg', title: 'Zapatilla 1-XFX', price: 5000 },
    { id: 6, image: '/assets/productos/zapatilla_2.jpg', title: 'Zapatilla 2000-X', price: 9800 },
    { id: 7, image: '/assets/productos/zapatilla_1.jpg', title: 'Zapatilla 1-XFX', price: 5000 },
    { id: 8, image: '/assets/productos/zapatilla_2.jpg', title: 'Zapatilla 2000-X', price: 9800 },
    { id: 9, image: '/assets/productos/zapatilla_3.jpg', title: 'Zapatilla 3 Run', price: 6500 },
    { id: 10, image: '/assets/productos/zapatilla_2.jpg', title: 'Zapatilla 2000-X', price: 9800 },
    { id: 11, image: '/assets/productos/zapatilla_3.jpg', title: 'Zapatilla 3 Run', price: 6500 },
    { id: 12, image: '/assets/productos/zapatilla_1.jpg', title: 'Zapatilla 1-XFX', price: 5000 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
