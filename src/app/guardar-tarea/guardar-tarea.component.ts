import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-guardar-tarea',
  templateUrl: './guardar-tarea.component.html',
  styleUrls: ['./guardar-tarea.component.css']
})
export class GuardarTareaComponent implements OnInit{


tarea : Tarea = new Tarea();
constructor(private tareaServicio:TareaService, private router:Router){}


ngOnInit(): void {
}

guardarTarea(){
  this.tareaServicio.registrarTarea(this.tarea).subscribe(dato => 
    {
      this.irListaTareas();
    },error => console.log(error)
    );
}

irListaTareas(){
  this.router.navigate(['/tareas'])
}

onSubmit(){
  this.guardarTarea();
}

}
