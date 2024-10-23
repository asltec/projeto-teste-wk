import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutosApi } from '../../api/produtos.api';
import { ProdutosFacade } from '../../produtos.facade';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxCurrencyDirective } from "ngx-currency";

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    NgxCurrencyDirective
  ],
  providers: [ProdutosApi, ProdutosFacade],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.scss'
})
export class ProdutosFormComponent implements OnInit {
  
  public produtosForm: FormGroup;
  public rotaId: any;

  constructor(private form: FormBuilder,
    private route: ActivatedRoute,
    private api: ProdutosApi,
    private facade: ProdutosFacade,
    private router: Router) { }
  
  ngOnInit(): void {
    this.iniciarForm();

    if (this.route.snapshot.params['id']) {
      const id = this.route.snapshot.params['id'];
      this.rotaId = id;
      this.preencherForm();
    }
  }

  private preencherForm() {
    this.api.getProdutoId(this.rotaId).then((res) => {
      this.produtosForm.patchValue({
        descricao: res?.descricao,
        valorUnitario: res?.valor_unitario,
       
      });
    })
  }

  private iniciarForm() {
    this.produtosForm = this.form.group({
      descricao: ['', [Validators.required]],
      valor_unitario: ['', [Validators.required]],
    });
  }

  submit() {
    if (!this.produtosForm.valid) {
      return;
    } else {
      if (this.rotaId) {
        this.facade.updateProduto(this.rotaId, this.produtosForm.value);
      } else {
        this.facade.addProduto(this.produtosForm.value);
      }
    }
  }

  public rotaListagemProdutos() {
    this.router.navigate(['/produtos']);
  }

}
