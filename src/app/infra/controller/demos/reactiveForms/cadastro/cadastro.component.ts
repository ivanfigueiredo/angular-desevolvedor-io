import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ICreateUserInBound } from '../../../../../application/inbound/ICreateUserInBound';
import { CreateUserUseCase } from '../../../../../application/CreateUserUseCase';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {
  public cadastroForm: FormGroup;

  constructor(
    @Inject(CreateUserUseCase)
    private readonly createUserInBound: ICreateUserInBound
  ) {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      confirmarSenha: new FormControl(''),
    });
  }

  adicionarUsuario() {
    let output = this.cadastroForm.value;
    this.createUserInBound.execute({
      nome: output.nome,
      email: output.email,
      senha: output.senha,
      confirmarSenha: output.confirmarSenha,
    });
  }
}
