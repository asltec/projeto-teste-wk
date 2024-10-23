import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './menu-form.component.html',
  styleUrl: './menu-form.component.scss'
})
export class MenuFormComponent {

  @Input() labelButton: string;
  @Output() add = new EventEmitter();

}
