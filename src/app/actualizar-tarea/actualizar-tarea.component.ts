import  Swal  from 'sweetalert2';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';
import { formatDate , DatePipe } from '@angular/common';

@Component({
  selector: 'app-actualizar-tarea',
  templateUrl: './actualizar-tarea.component.html',
  styleUrls: ['./actualizar-tarea.component.css']
})
export class ActualizarTareaComponent implements OnInit {

  identificador:number;
  fechaFormateada:string;
  tarea:Tarea = new Tarea();
  constructor(private tareaService:TareaService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.identificador = this.route.snapshot.params['id'];
    this.tareaService.obtenerTareaPorId(this.identificador).subscribe(dato =>{
    this.fechaFormateada = formatDate(dato.fechaCreacion, 'yyyy-MM-dd', 'en-US')
    const fecha = new Date(this.fechaFormateada);
    this.tarea.fechaCreacion = fecha;
      this.tarea = dato;
    },error => console.log(error));

  }

  irAlaListaDeTareas(){
    this.router.navigate(['/tareas']);
    Swal.fire('Tarea actualizada',`La tarea ${this.tarea.descripcion} ha sido actualizad con exito`,`success`);
  }

  onSubmit(){
    this.tareaService.actualizarTarea(this.identificador,this.tarea).subscribe(dato => {
      this.irAlaListaDeTareas();
    },error => console.log(error));
  }

}
