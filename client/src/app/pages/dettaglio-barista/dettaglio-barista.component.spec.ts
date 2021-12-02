import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioBaristaComponent } from './dettaglio-barista.component';

describe('DettaglioBaristaComponent', () => {
  let component: DettaglioBaristaComponent;
  let fixture: ComponentFixture<DettaglioBaristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioBaristaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioBaristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
