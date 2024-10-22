import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Cliente } from '../../models/clientes.model';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.scss'
})
export class ClientesListComponent {

  @Input() clientes!: Cliente[];
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'endereco', 'complemento', 'numero', 'cep','bairro', 'cidade', 'acoes'];

}
