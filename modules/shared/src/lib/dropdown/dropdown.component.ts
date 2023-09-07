import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() data: { [key: string]: any }[] = [{}];
  @Input() value: { [key: string]: any } = {};

  @Input() placement = 'bottom';
  @Input() textField = 'text';
  @Input() valueField = 'id';
  @Output()
  valueChange = new EventEmitter();

  onSelect(value: { [key: string]: string }) {
    this.value = value;
    this.valueChange.emit(value);
  }
}
