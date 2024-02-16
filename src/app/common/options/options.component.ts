import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  option!: string;
  @Output () valueResponse: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.optionSelect('Lugar')
  }

  optionSelect(value: string) {
    this.option = value;
    this.valueResponse.emit(value);
  }
}
