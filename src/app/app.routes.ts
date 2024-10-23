import { Routes } from '@angular/router';
import { ClientesFormComponent } from './clientes/containers/clientes-form/clientes-form.component';
import { ClientesComponent } from './clientes/containers/clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/containers/pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/containers/produtos/produtos.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    { path: 'home', component: HomeComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'clientes-add', component: ClientesFormComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'produtos', component: ProdutosComponent }
];
