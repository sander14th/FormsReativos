import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from "./componente1/componente1.component";
import { Componente2Component } from "./componente2/componente2.component";
import { Componente3Component } from "./componente3/componente3.component";
import { Componente4Component } from "./componente4/componente4.component";
import { ComponenteFormComponent } from "./componente-form/componente-form.component";
import { Componente5Component } from "./componente5/componente5.component";
import { Componente6Component } from "./componente6/componente6.component";
;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente1Component, Componente2Component, Componente3Component, Componente4Component, ComponenteFormComponent, Componente5Component, Componente6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trabalho1';
}
