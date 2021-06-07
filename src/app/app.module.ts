import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { FormExampleComponent } from './form-example/form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    PipesExampleComponent,
    FormExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
