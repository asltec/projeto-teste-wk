import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PedidosApi } from '../../api/pedidos.api';
import { PedidosFacade } from '../../pedidos.facade';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { ProdutosApi } from '../../../produtos/api/produtos.api';
import { ProdutosFacade } from '../../../produtos/produtos.facade';
import { ClientesApi } from '../../../clientes/api/clientes.api';
import { ClientesFacade } from '../../../clientes/clientes.facade';

@Component({
  selector: 'app-pedidos-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [PedidosApi, PedidosFacade, ProdutosApi, ProdutosFacade, ClientesApi, ClientesFacade],
  templateUrl: './pedidos-form.component.html',
  styleUrl: './pedidos-form.component.scss'
})
export class PedidosFormComponent implements OnInit {

  public pedidosForm: FormGroup;
  public rotaId: any;

  constructor(private form: FormBuilder,
    private route: ActivatedRoute,
    private api: PedidosApi,
    private facade: PedidosFacade,
    public facadeProdutos: ProdutosFacade,
    public facadeClientes: ClientesFacade,
    private router: Router) { }

  ngOnInit(): void {

    this.iniciarForm();

    if (this.route.snapshot.params['id']) {
      const id = this.route.snapshot.params['id'];
      this.rotaId = id;
      this.preencherForm();
    }

    this.facadeProdutos.getProdutos();
    this.facadeClientes.getClientes();
  }

  private preencherForm() {
    this.api.getPedidoId(this.rotaId).then((res) => {
      this.pedidosForm.patchValue({
        data: res?.data,
        cliente: res?.cliente,
        produto: res?.produto,
        total: res?.total,
      });
    })
  }

  private iniciarForm() {
    this.pedidosForm = this.form.group({
      data: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      produto: ['', [Validators.required]],
      total: ['', [Validators.required]],
    });
  }

  submit() {
    if (!this.pedidosForm.valid) {
      return;
    } else {
      if (this.rotaId) {
        this.facade.updatePedido(this.rotaId, this.pedidosForm.value);
      } else {
        this.facade.addPedido(this.pedidosForm.value);
      }
    }
  }

  public rotaListagemPedidos() {
    this.router.navigate(['/pedidos']);
  }
}
