import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../modelo/Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {


  url:string = 'http://localhost:3000/produtos';

  // Primeiro método a ser executado quando referenciada a classe de serviço
  constructor(private http:HttpClient) { }

  //selecionar produtos
  selecionar():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  //cadastrar produtos
  cadastrar(obj:Produto):Observable<Produto>{
    return this.http.post<Produto>(this.url, obj);
  }

  //alterar produtos
  alterar(obj:Produto):Observable<Produto>{
    return this.http.put<Produto>(`${this.url}/${obj.id}`, obj);
  }

  //remover produtos
  remover(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}