import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../models/produtos.model';
import { ButtonsListComponent } from '../../../shared/components/buttons-list/buttons-list.component';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-produtos-list',
  standalone: true,
  imports: [MatTableModule, ButtonsListComponent],
  templateUrl: './produtos-list.component.html',
  styleUrl: './produtos-list.component.scss'
})
export class ProdutosListComponent {

  @Input() produtos: Produto[];
  @Output() editar = new EventEmitter<string>();
  displayedColumns: string[] = ['id', 'descricao', 'valor_unitario', 'acoes'];

}
