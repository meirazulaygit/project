import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product8CompComponent } from './product8-comp.component';

describe('Product8CompComponent', () => {
  let component: Product8CompComponent;
  let fixture: ComponentFixture<Product8CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product8CompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product8CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
