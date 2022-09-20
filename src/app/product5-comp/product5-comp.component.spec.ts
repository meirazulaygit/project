import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product5CompComponent } from './product5-comp.component';

describe('Product5CompComponent', () => {
  let component: Product5CompComponent;
  let fixture: ComponentFixture<Product5CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product5CompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product5CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
