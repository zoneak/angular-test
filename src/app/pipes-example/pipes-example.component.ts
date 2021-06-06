import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent {

  nome = 'Monkey D. Luffy';
  dataAniversario = new Date(1988, 1, 7);
  preco = 12855.32;
  troco = 0.57392;

}
