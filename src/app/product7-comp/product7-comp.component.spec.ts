import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product7CompComponent } from './product7-comp.component';

describe('Product7CompComponent', () => {
  let component: Product7CompComponent;
  let fixture: ComponentFixture<Product7CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product7CompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product7CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
