import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Cliente } from '../../models/clientes.model';
import { ButtonsListComponent } from '../../../shared/components/buttons-list/buttons-list.component';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [MatTableModule, ButtonsListComponent],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.scss'
})
export class ClientesListComponent {

  @Input() clientes: Cliente[];
  @Output() editar = new EventEmitter<string>();
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'endereco', 'complemento', 'numero', 'cep','bairro', 'cidade', 'acoes'];

}
