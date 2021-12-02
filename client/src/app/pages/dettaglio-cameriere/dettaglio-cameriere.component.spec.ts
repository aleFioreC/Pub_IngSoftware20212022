import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioCameriereComponent } from './dettaglio-cameriere.component';

describe('DettaglioCameriereComponent', () => {
  let component: DettaglioCameriereComponent;
  let fixture: ComponentFixture<DettaglioCameriereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioCameriereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioCameriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
