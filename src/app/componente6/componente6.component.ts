import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente6',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente6.component.html',
  styleUrl: './componente6.component.css'
})
export class Componente6Component {
  nome: string;
  //vetor
  vetor:Produto[] = [];

  //vizi botoes
  btnCadastrar:boolean = true;

  //form
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });

  constructor(private servico:ProdutoService){}

  //iniciar componente
  ngOnInit(){
    this.selecionar();
  }

  //selecionar produtos
  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

  //cadastro produto
  cadastrar(){
    this.servico.cadastrar(this.formulario.value as Produto)
    .subscribe(retorno => {
      this.vetor.push(retorno);
      this.formulario.reset();
    });
  }

  //selecionar
  selecionarProduto(indice:number){
    this.formulario.setValue({
      id:this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.btnCadastrar = false;
  }

  //cadastrar
  alterar(){
    this.servico.alterar(this.formulario.value as Produto).subscribe(retorno => {
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      });

      this.vetor[indiceAlterado] = retorno;
      this.formulario.reset();
      this.btnCadastrar = true;
    });
  }

  //remover
  remover(){
    this.servico.remover(this.formulario.value.id).subscribe(() => {
      let indiceRemovido = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id;
      });

      this.vetor.splice(indiceRemovido, 1);

      this.formulario.reset();
      this.btnCadastrar = true;
    });
  }
}

