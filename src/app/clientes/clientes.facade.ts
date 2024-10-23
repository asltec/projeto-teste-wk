import { Injectable } from "@angular/core";
import { ClientesApi } from "./api/clientes.api";
import { Observable } from "rxjs";
import { Cliente } from "./models/clientes.model";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable()
export class ClientesFacade {

    public clientes$: Observable<any>;

    constructor(private api: ClientesApi,
        private toastrService: ToastrService,
        private router: Router) { }

    public getClientes() {
        this.clientes$ = this.api.getClientes();
    }

    public addCliente(cliente: Cliente) {
        const clienteAdd = this.api.addCliente(cliente).then((res) => {
            this.toastrService.success("Cliente cadastrado com sucesso!");
            this.rotaListagemClientes();
        });
        return clienteAdd;
    }

    public updateCliente(id: string, cliente: Cliente) {
        const clienteUpdate = this.api.updateCliente(id, cliente).then((res) => {
            this.toastrService.success("Cliente atualizado com sucesso!");
            this.rotaListagemClientes();
        });

        return clienteUpdate
    }

    public deleteCliente(id: string) {
        const deleteCliente = this.api.deleteCliente(id).then((res) => {
            this.toastrService.success("Cliente deletado com sucesso!");
            this.rotaListagemClientes();
        });

        return deleteCliente;
    }

    private rotaListagemClientes() {
        this.router.navigate(['/clientes']);
    }
}