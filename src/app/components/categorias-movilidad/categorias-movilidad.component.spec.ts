import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasMovilidadComponent } from './categorias-movilidad.component';

describe('CategoriasMovilidadComponent', () => {
  let component: CategoriasMovilidadComponent;
  let fixture: ComponentFixture<CategoriasMovilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasMovilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasMovilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
