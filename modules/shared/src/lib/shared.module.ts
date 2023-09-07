import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [CommonModule, AngularSvgIconModule],
  declarations: [DropdownComponent, TabComponent],
  exports: [DropdownComponent, TabComponent],
})
export class SharedModule {}
