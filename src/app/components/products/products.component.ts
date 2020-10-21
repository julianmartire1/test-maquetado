import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [
    { id: 1, img: '/assets/productos/zapatilla_1.jpg', name: 'Zapatilla 1-XFX', price: 5000 },
    { id: 2, img: '/assets/productos/zapatilla_2.jpg', name: 'Zapatilla 2000-X', price: 9800 },
    { id: 3, img: '/assets/productos/zapatilla_3.jpg', name: 'Zapatilla 3 Run', price: 6500 },
    { id: 4, img: '/assets/productos/zapatilla_3.jpg', name: 'Zapatilla 3 Run', price: 6500 },
    { id: 5, img: '/assets/productos/zapatilla_1.jpg', name: 'Zapatilla 1-XFX', price: 5000 },
    { id: 6, img: '/assets/productos/zapatilla_2.jpg', name: 'Zapatilla 2000-X', price: 9800 },
    { id: 7, img: '/assets/productos/zapatilla_1.jpg', name: 'Zapatilla 1-XFX', price: 5000 },
    { id: 8, img: '/assets/productos/zapatilla_2.jpg', name: 'Zapatilla 2000-X', price: 9800 },
    { id: 9, img: '/assets/productos/zapatilla_3.jpg', name: 'Zapatilla 3 Run', price: 6500 },
    { id: 10, img: '/assets/productos/zapatilla_2.jpg', name: 'Zapatilla 2000-X', price: 9800 },
    { id: 11, img: '/assets/productos/zapatilla_3.jpg', name: 'Zapatilla 3 Run', price: 6500 },
    { id: 12, img: '/assets/productos/zapatilla_1.jpg', name: 'Zapatilla 1-XFX', price: 5000 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
