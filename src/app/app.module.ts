import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { HttpClientModule} from '@angular/common/http';
import { GuardarTareaComponent } from './guardar-tarea/guardar-tarea.component';
import { FormsModule } from '@angular/forms';
import { ActualizarTareaComponent } from './actualizar-tarea/actualizar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    GuardarTareaComponent,
    ActualizarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
