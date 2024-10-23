import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProdutosApi } from "./api/produtos.api";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Produto } from "./models/produtos.model";

@Injectable({ providedIn: 'root' })
export class ProdutosFacade {

    public produtos$: Observable<any>;

    constructor(private api: ProdutosApi,
        private toastrService: ToastrService,
        private router: Router) { }

    public getProdutos() {
        this.produtos$ = this.api.getProdutos();
    }

    public addProduto(produto: Produto) {
        const produtoAdd = this.api.addProduto(produto).then((res) => {
            this.toastrService.success("Produto cadastrado com sucesso!");
            this.rotaListagemProdutos();
        });
        return produtoAdd;
    }

    public updateProduto(id: string, produto: Produto) {
        const produtoUpdate = this.api.updateProduto(id, produto).then((res) => {
            this.toastrService.success("Produto atualizado com sucesso!");
            this.rotaListagemProdutos();
        });

        return produtoUpdate
    }

    public deleteProduto(id: string) {
        const deleteProduto = this.api.deleteProduto(id).then((res) => {
            this.toastrService.success("Produto deletado com sucesso!");
            this.rotaListagemProdutos();
        });

        return deleteProduto;
    }

    private rotaListagemProdutos() {
        this.router.navigate(['/produtos']);
    }
}