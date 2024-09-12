import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  standalone: true,
  imports: [],
  templateUrl: './componente4.component.html',
  styleUrl: './componente4.component.css'
})
export class Componente4Component {

  media:number = 8;
  nomes:string [] = ['Rayka', 'Jamily'];

  //linguagem
  linguagem:string = 'HTML'
}
