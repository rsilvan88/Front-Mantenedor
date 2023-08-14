import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareasComponent } from './lista-tareas.component';
import { TareaService } from '../tarea.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListaTareasComponent', () => {
  let service: TareaService;
  beforeEach(async () => {
     await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ListaTareasComponent],
    }).compileComponents();
    service = TestBed.inject(TareaService)
  });

  it('should create the ListarComponente Service', () => {
    expect(service).toBeTruthy();
  });
    
});
