import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ButtonsListComponent } from '../../../shared/components/buttons-list/buttons-list.component';
import { Pedido } from '../../models/pedidos.mode';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-pedidos-list',
  standalone: true,
  imports: [MatTableModule, ButtonsListComponent, CurrencyPipe],
  templateUrl: './pedidos-list.component.html',
  styleUrl: './pedidos-list.component.scss'
})
export class PedidosListComponent implements OnInit {

  
  @Input() pedidos: Pedido[];
  @Output() editar = new EventEmitter<string>();
  displayedColumns: string[] = ['id', 'data', 'cliente', 'produto', 'total', 'acoes'];
  
  constructor(){}
  
  ngOnInit(): void {
  }

}
