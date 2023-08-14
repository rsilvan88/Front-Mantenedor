import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaService } from './tarea.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TareaService', () => {
  let service: TareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule]
    });
    service = TestBed.inject(TareaService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
