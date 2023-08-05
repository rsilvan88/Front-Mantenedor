import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { GuardarTareaComponent } from './guardar-tarea/guardar-tarea.component';
import { ActualizarTareaComponent } from './actualizar-tarea/actualizar-tarea.component';

const routes: Routes = [
  {path : 'tareas',component:ListaTareasComponent},
  {path :'', redirectTo:'tareas',pathMatch:'full'},
  {path : 'guardar-tarea', component:GuardarTareaComponent},
  {path : 'actualizar-tarea/:id', component:ActualizarTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
