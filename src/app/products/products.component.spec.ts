import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsComponent } from './products.component';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [FormsModule, MatDialogModule, MatButtonModule, MatSidenavModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
