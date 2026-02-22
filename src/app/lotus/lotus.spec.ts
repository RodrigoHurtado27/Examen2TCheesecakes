import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lotus } from './lotus';

describe('Lotus', () => {
  let component: Lotus;
  let fixture: ComponentFixture<Lotus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lotus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lotus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
