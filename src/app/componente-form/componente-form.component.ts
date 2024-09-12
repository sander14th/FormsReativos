import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-componente-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente-form.component.html',
  styleUrl: './componente-form.component.css'
})
export class ComponenteFormComponent{
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null,[Validators.required, Validators.min(0), Validators.max(120)]),
    curso: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
    ano: new FormControl('', [Validators.required, Validators.max(4), Validators.min(1)])
  });

  //VISIBILIDADE Botão Cadastrar
  btncadastrar:boolean = true;

  //vetor estudantes/pessoa
  vetor:Pessoa[] = [];

  //amarzenar indice/posição selecionada
  indice:number = -1;

  //cadastro
 cadastrar(){

  //cadastrovetor
  this.vetor.push(this.formulario.value as Pessoa);

  //limpeza do form
  this.formulario.reset();
 }

 selecionar(indice:number){

  //atribuir indice
  this.indice = indice;

  //passarproform
  this.formulario.setValue({
    nome: this.vetor[indice].nome,
    idade: this.vetor[indice].idade,
    curso: this.vetor[indice].curso,
    ano: this.vetor[indice].ano

  });

  //visibilidae
  this.btncadastrar = false
 }

 //alterar estudante
 alterar(){

  //alterar vetporId
  this.vetor[this.indice] = this.formulario.value as Pessoa;

  //limpar
  this.formulario.reset();

  //vizibilidade
  this.btncadastrar = true;

 }
 //remover estudante
 remover(){

  //removervetor
  this.vetor.splice(this.indice, 1);

  //limpeza
  this.formulario.reset();

  //vizi
  this.btncadastrar = true;
 }

 //cancelar
  cancelar(){

    //cancelar operação

    //limpeza input
    this.formulario.reset();

    //vizibilidade
    this.btncadastrar = true;
  }
 
  






}
