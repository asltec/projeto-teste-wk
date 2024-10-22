import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/containers/clientes/clientes.component';
import { PedidosComponent } from './pedidos/containers/pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/containers/produtos/produtos.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    { path: 'home', component: HomeComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'produtos', component: ProdutosComponent }
];
