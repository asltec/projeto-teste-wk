import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { PedidosApi } from "./api/pedidos.api";
import { Pedido } from "./models/pedidos.mode";

@Injectable({ providedIn: 'root' })
export class PedidosFacade {

    public pedidos$: Observable<any>;

    constructor(
        private api: PedidosApi,
        private toastrService: ToastrService,
        private router: Router) { }

    public getPedidos() {
        this.pedidos$ = this.api.getPedidos();
    }


    public addPedido(pedido: Pedido) {
        const pedidoAdd = this.api.addPedido(pedido).then((res) => {
            this.toastrService.success("Pedido realizado com sucesso!");
            this.rotaListagemPedidos();
        });
        return pedidoAdd;
    }

    public updatePedido(id: string, pedido: Pedido) {
        const pedidoUpdate = this.api.updatePedido(id, pedido).then((res) => {
            this.toastrService.success("Pedido alterado com sucesso!");
            this.rotaListagemPedidos();
        });

        return pedidoUpdate
    }

    public deletePedido(id: string) {
        const deletePedido = this.api.deletePedido(id).then((res) => {
            this.toastrService.success("Pedido removido com sucesso!");
            this.rotaListagemPedidos();
        });

        return deletePedido;
    }

    private rotaListagemPedidos() {
        this.router.navigate(['/pedidos']);
    }
}