import { Routes } from '@angular/router';
import { ClientesFormComponent } from './clientes/containers/clientes-form/clientes-form.component';
import { ClientesComponent } from './clientes/containers/clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/containers/pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/containers/produtos/produtos.component';
import { ProdutosFormComponent } from './produtos/containers/produtos-form/produtos-form.component';
import { PedidosFormComponent } from './pedidos/containers/pedidos-form/pedidos-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    { path: 'home', component: HomeComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'clientes-add', component: ClientesFormComponent },
    { path: 'clientes-add/:id', component: ClientesFormComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'pedidos-add', component: PedidosFormComponent },
    { path: 'pedidos-add/:id', component: PedidosFormComponent },
    { path: 'produtos', component: ProdutosComponent },
    { path: 'produtos-add', component: ProdutosFormComponent },
    { path: 'produtos-add/:id', component: ProdutosFormComponent }
];
