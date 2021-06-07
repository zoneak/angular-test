import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome!: string;
  email!: string;
  profissao!: string;
}

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {

  cliente = new Cliente();

  profissoes = ['Programador', 'Empresário', 'Outra'];

  salvar(form: NgForm) {
    console.log(form.value);
    console.log(this.cliente);

    // reseta os campos e estado do form
    form.reset({ profissao: ''});
  }
}
