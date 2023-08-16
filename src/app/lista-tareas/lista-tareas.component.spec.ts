import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea';
import { of } from 'rxjs';


describe('ListaTareasComponent', () => {
  let service: TareaService;
  let httpClientSpy: {get: jasmine.Spy};

  beforeEach(async () => {
     httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
     service = new TareaService(httpClientSpy as any)
  });

  it('Servicio debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('Se debe listar un array de tareas', () => {

     const listTareas: Tarea[] = [{
      identificador: 1,
      descripcion: "Tarea de Ciencias",
      fechaCreacion: new Date(),
      vigente: true,
      }, {
      identificador: 3,
      descripcion: "Tarea de Proyecto",
      fechaCreacion: new Date(),
      vigente: true,
  }];

  const mockResultadoList = [
    {
        "identificador": 1,
        "descripcion": "Tarea de Ciencias",
        "fechaCreacion": new Date(),
        "vigente": true
    },
    {
        "identificador": 3,
        "descripcion": "Tarea de Proyecto",
        "fechaCreacion": new Date(),
        "vigente": true
    }
];

    httpClientSpy.get.and.returnValue(of(mockResultadoList));

    service.obtenerListaTareas().subscribe((data) =>{
      expect(data).toEqual(listTareas);
  
  });
  expect(httpClientSpy.get).toHaveBeenCalledTimes(1);

})});
