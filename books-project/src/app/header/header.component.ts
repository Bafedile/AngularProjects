import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() selectedItemHeader = new EventEmitter<string>();
  onSelected(selectedLink: string) {
    this.selectedItemHeader.emit(selectedLink);
  }
}
