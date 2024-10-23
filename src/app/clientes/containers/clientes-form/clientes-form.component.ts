import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesApi } from '../../api/clientes.api';
import { ClientesFacade } from '../../clientes.facade';

@Component({
  selector: 'app-clientes-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [ClientesApi, ClientesFacade],
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.scss'
})
export class ClientesFormComponent implements OnInit {

  public clientesForm: FormGroup;
  public rotaId: any;

  constructor(private form: FormBuilder,
    private route: ActivatedRoute,
    private api: ClientesApi,
    private facade: ClientesFacade,
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
    this.api.getClienteId(this.rotaId).then((res) => {
      this.clientesForm.patchValue({
        nome: res?.nome,
        cpf: res?.cpf,
        endereco: res?.endereco,
        complemento: res?.complemento,
        numero: res?.numero,
        cep: res?.cep,
        bairro: res?.bairro,
        cidade: res?.cidade
      })
    })
  }

  private iniciarForm() {
    this.clientesForm = this.form.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      complemento: [''],
      numero: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]]
    })
  }

  submit() {
    if (!this.clientesForm.valid) {
      return;
    } else {
      if (this.rotaId) {
        this.facade.updateCliente(this.rotaId, this.clientesForm.value);
      } else {
        this.facade.addCliente(this.clientesForm.value);
      }
    }
  }

  public rotaListagemClientes() {
    this.router.navigate(['/clientes']);
  }

}
