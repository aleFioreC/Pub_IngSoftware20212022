import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioAdminComponent } from './dettaglio-admin.component';

describe('DettaglioAdminComponent', () => {
  let component: DettaglioAdminComponent;
  let fixture: ComponentFixture<DettaglioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
