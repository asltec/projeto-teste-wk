import { Component, OnInit } from '@angular/core';
import { ClientesListComponent } from '../../components/clientes-list/clientes-list.component';
import { MenuFormComponent } from '../../../shared/components/menu-form/menu-form.component';
import { Router } from '@angular/router';
import { ClientesFacade } from '../../clientes.facade';
import { AsyncPipe } from '@angular/common';
import { ClientesApi } from '../../api/clientes.api';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [ClientesListComponent, MenuFormComponent, AsyncPipe],
  providers: [ClientesFacade,ClientesApi],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent implements OnInit {
  
  constructor(private router: Router,
    public facade:ClientesFacade){}
  
  ngOnInit(): void {
    this.facade.getClientes();
  }

  rotaAdicionarCliente(){
    this.router.navigate(['/clientes-add']);
  }
  rotaEditarCliente(id: string){
    this.router.navigate([`/clientes-add/${id}`]);
  }

}
