import { Component } from '@angular/core';
import { ClientesListComponent } from '../../components/clientes-list/clientes-list.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [ClientesListComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {

}
