import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../media.pipe";

@Component({
  selector: 'app-componente5',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './componente5.component.html',
  styleUrl: './componente5.component.css'
})
export class Componente5Component {

  //vetor objs
  alunos:any = [
    {'nome':'Rayka','nota1':8, 'nota2':9},
    {'nome':'Jamily','nota1':7, 'nota2':8},
    {'nome':'Maria', 'nota1':3, 'nota2':2},
    {'nome':'Sandersson', 'nota1':7, 'nota2':7}
  ];

}
