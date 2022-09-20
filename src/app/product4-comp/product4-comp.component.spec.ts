import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product4CompComponent } from './product4-comp.component';

describe('Product4CompComponent', () => {
  let component: Product4CompComponent;
  let fixture: ComponentFixture<Product4CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product4CompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product4CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
