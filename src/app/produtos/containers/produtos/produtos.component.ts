import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuFormComponent } from '../../../shared/components/menu-form/menu-form.component';
import { ProdutosApi } from '../../api/produtos.api';
import { ProdutosListComponent } from '../../components/produtos-list/produtos-list.component';
import { ProdutosFacade } from '../../produtos.facade';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [ProdutosListComponent, MenuFormComponent, AsyncPipe],
  providers: [ProdutosFacade, ProdutosApi],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit {
  
  constructor(private router: Router, public facade: ProdutosFacade){}
  
  ngOnInit(): void {
   this.facade.getProdutos();
  }

  rotaAdicionarProduto(){
    this.router.navigate(['/produtos-add']);
  }

  rotaEditarProduto(id: string){
    this.router.navigate([`/produtos-add/${id}`]);
  }
}

