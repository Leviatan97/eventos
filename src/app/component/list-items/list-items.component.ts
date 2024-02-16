import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {
  @Input() list: any = []

  constructor(private router: Router) {}

  navigateToDetail() {
    this.router.navigate(['/detail'])
  }
}
