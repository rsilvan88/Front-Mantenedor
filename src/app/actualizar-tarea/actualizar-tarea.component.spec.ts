import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTareaComponent } from './actualizar-tarea.component';
import { TareaService } from '../tarea.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';

describe('ActualizarTareaComponent', () => {
  let service: TareaService;
  let component: ActualizarTareaComponent;
  let fixture: ComponentFixture<ActualizarTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ActualizarTareaComponent]
    });
    service = TestBed.inject(TareaService)
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
