import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagenComponent } from './mensagem.component';

describe('MensagenComponent', () => {
  let component: MensagenComponent;
  let fixture: ComponentFixture<MensagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
