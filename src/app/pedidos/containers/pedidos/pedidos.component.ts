import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuFormComponent } from '../../../shared/components/menu-form/menu-form.component';
import { PedidosApi } from '../../api/pedidos.api';
import { PedidosListComponent } from '../../components/pedidos-list/pedidos-list.component';
import { PedidosFacade } from '../../pedidos.facade';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [PedidosListComponent, MenuFormComponent, AsyncPipe],
  providers: [PedidosFacade, PedidosApi],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent implements OnInit {

  constructor(
    private router: Router,
    public facade: PedidosFacade) { }

  ngOnInit(): void {
    this.facade.getPedidos();

  }

  rotaAdicionarPedido() {
    this.router.navigate(['/pedidos-add']);
  }

  rotaEditarPedido(id: string) {
    this.router.navigate([`/pedidos-add/${id}`]);
  }

}
