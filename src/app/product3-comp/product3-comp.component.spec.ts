import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product3CompComponent } from './product3-comp.component';

describe('Product3CompComponent', () => {
  let component: Product3CompComponent;
  let fixture: ComponentFixture<Product3CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product3CompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product3CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
