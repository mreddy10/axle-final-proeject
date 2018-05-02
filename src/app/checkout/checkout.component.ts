import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {ConfirmComponent} from '../confirm/confirm.component';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  userForm: any;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.userForm = this.formBuilder.group({
      'address': ['', [Validators.required, Validators.maxLength(20)]],
      'phone_num': ['', [Validators.required, Validators.maxLength(12), Validators.pattern('[0-9]+')]],
      'city_state_country': ['', [Validators.required, Validators.minLength(10)]],
      'zip': ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5), Validators.pattern('[0-9]+')]],
      'card': ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[0-9]+')]],
      'exp': ['', [Validators.required, Validators.maxLength(5), Validators.pattern('^(0[1-9]|1[012])\\/\\d{2}$')]],
    });
  }

  confirmDialogRef: MatDialogRef<ConfirmComponent>;
  isValid: string;
  onSubmit({ value, valid}: {value: User, valid: boolean }) {
    if (valid === true) {
      this.isValid = 'valid';
    }
  }

  openConfirmDialog() {
    if(this.confirmDialogRef == null) {
      this.confirmDialogRef = this.dialog.open(ConfirmComponent, {disableClose: true});
      this.confirmDialogRef.afterClosed().subscribe(result => {
        this.confirmDialogRef = null;
      });
    }
  }

  ngOnInit() {
  }

}
