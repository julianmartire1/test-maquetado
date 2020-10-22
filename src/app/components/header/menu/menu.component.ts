import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() showMenu: boolean;
  @Output() onMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  emitOnMenu() {
    this.onMenu.emit(!this.showMenu);
  }

}
