import { Component, OnInit } from '@angular/core';
import { ListItemsService } from 'src/app/services/list-items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  dataList: any = []

  constructor(private listItemsService: ListItemsService) {
  }

  ngOnInit(): void {
    this.listPlace().then(()=>{
      this.isLoading = false;
    });
  }


  optionSelect(value: string): void {
    this.isLoading = true;
    switch(value) {
      case 'Lugar':
          this.listPlace().then(()=>{
            this.isLoading = false;
          });
        break;
      case 'Musica':
          this.listMusic().then(()=>{
            this.isLoading = false;
          });
        break;
      case 'Alimentos':
          this.listFood().then(()=>{
            this.isLoading = false;
          });
        break;
      case 'Decoracion':
          this.listDecoration().then(()=>{
            this.isLoading = false;
          });
        break;
    }
  }

  

  async listPlace(): Promise<void> {
    await this.listItemsService.
    listPlace().
    subscribe(data => {
      this.dataList = data;
    });
  }

  async listMusic() {
    await this.listItemsService.
    listMusic().
    subscribe(data => {
      this.dataList = data;
    });
  }

  async listFood() {
    await this.listItemsService.
    listFood().
    subscribe(data => {
      this.dataList = data;
    });
  }

  async listDecoration() {
    await this.listItemsService.
    listDecoration().
    subscribe(data => {
      this.dataList = data;
    });
  }
}
