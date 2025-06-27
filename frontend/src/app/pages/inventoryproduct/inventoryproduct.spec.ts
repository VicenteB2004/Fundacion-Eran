import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventoryproduct } from './inventoryproduct';

describe('Inventoryproduct', () => {
  let component: Inventoryproduct;
  let fixture: ComponentFixture<Inventoryproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inventoryproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inventoryproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
