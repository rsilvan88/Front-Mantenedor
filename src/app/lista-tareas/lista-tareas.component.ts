import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';
import  Swal  from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit{

tareas:Tarea[];

  constructor(private tareaServicio:TareaService, private router:Router){}

ngOnInit(): void {
  this.obtenerTareas();
}

actualizarTarea(id:number){
  this.router.navigate(['actualizar-tarea',id]);
}

private obtenerTareas(){
  this.tareaServicio.obtenerListaTareas().subscribe(dato => {
    this.tareas = dato;
  });

}

eliminarTarea(id:number){
  Swal.fire({
    title: '¿Estas seguro?',
    text: 'Confirma si deseas eliminar la tarea',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'No, cancelar',
  }).then((result) => {
    if(result.value){
      this.tareaServicio.eliminarTarea(id).subscribe(dato => {
        console.log(dato);
        this.obtenerTareas();
        Swal.fire(
          'Tarea eliminada',
          'La tarea ha sido eliminada con exito',
          'success'
        )
      })
    }
  })
}

verDetallesTarea(id:number){
  this.router.navigate(['tarea-detalles',id]);
}


}
