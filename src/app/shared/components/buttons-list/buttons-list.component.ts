import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buttons-list',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './buttons-list.component.html',
  styleUrl: './buttons-list.component.scss'
})
export class ButtonsListComponent {

  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

}
