import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemplosSignalComponent } from './ejemplos-signal-component';

describe('EjemplosSignalComponent', () => {
  let component: EjemplosSignalComponent;
  let fixture: ComponentFixture<EjemplosSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemplosSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemplosSignalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
