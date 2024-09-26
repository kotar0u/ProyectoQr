import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecContraPage } from './rec-contra.page';

describe('RecContraPage', () => {
  let component: RecContraPage;
  let fixture: ComponentFixture<RecContraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
