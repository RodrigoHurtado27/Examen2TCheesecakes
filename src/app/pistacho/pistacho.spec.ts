import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pistacho } from './pistacho';

describe('Pistacho', () => {
  let component: Pistacho;
  let fixture: ComponentFixture<Pistacho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pistacho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pistacho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
