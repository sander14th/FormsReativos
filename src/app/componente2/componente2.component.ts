import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {

  mensagem(){
      alert('Hello');
}
}
