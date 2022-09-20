import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product6CompComponent } from './product6-comp.component';

describe('Product6CompComponent', () => {
  let component: Product6CompComponent;
  let fixture: ComponentFixture<Product6CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product6CompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product6CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
