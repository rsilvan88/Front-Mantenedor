import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarTareaComponent } from './guardar-tarea.component';
import { TareaService } from '../tarea.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Tarea } from '../tarea';
import { of } from 'rxjs';

describe('GuardarTareaComponent', () => {
  let service: TareaService;
  let httpClientSpy: {post: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['post']);
    service = new TareaService(httpClientSpy as any)
  });

  it('Servicio debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('Debe guardar nueva tarea', (done: DoneFn) => {

    //TODO: Mock de datos

   const mockTarea = {
    identificador: 1,
    descripcion: "hola hola hola",
    fechaCreacion: new Date(),
    vigente: true
   }

   const mockResultado = {
    
      "identificador": 1,
      "descripcion": "hola hola hola",
      "fechaCreacion": "2023-08-14T04:00:00.000+00:00",
      "vigente": true
   }
   
   httpClientSpy.post.and.returnValue(of(mockResultado)); 

service.registrarTarea(mockTarea).subscribe(resultado =>{
  expect(resultado).toEqual(mockResultado)
  done()
})

  })

});
