import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioCuocoComponent } from './dettaglio-cuoco.component';

describe('DettaglioCuocoComponent', () => {
  let component: DettaglioCuocoComponent;
  let fixture: ComponentFixture<DettaglioCuocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioCuocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioCuocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
