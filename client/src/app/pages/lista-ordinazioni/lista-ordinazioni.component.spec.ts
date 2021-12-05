import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdinazioniComponent } from './lista-ordinazioni.component';

describe('ListaOrdinazioniComponent', () => {
  let component: ListaOrdinazioniComponent;
  let fixture: ComponentFixture<ListaOrdinazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOrdinazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOrdinazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
