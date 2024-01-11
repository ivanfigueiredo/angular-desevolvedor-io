import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateUserDto, ICreateUserInBound } from '../../../../../application/inbound/ICreateUserInBound';
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
    private readonly createUserInBound: ICreateUserInBound,
    private readonly formBuilder: FormBuilder
  ) {
    this.cadastroForm = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      confirmarSenha: [''],
    });
  }

  adicionarUsuario() {
    const input = this.cadastroForm.value as unknown as CreateUserDto;
    this.createUserInBound.execute(input);
  }
}
