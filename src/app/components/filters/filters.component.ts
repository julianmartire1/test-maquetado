import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  showContent = false;

  filters = [
    {
      title: 'Catetoría',
      items: ['Zapatillas', 'Zapatos',
        'Botas',
        'Sandalias',
        'Pantuflas']
    },
    {
      title: 'Talle',
      items: ['36', '38',
        '40',
        '42',
        '44']
    },
    {
      title: 'Color',
      items: ['Amarillo', 'Negro',
        'Verde',
        'Azul',
        'Blanco']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
