import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {ConfirmComponent} from '../confirm/confirm.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  confirmDialogRef: MatDialogRef<ConfirmComponent>;
  isValid: string;
  user: User = {
    address: '',
    city_state_country: '',
    zip:  '',
    phone: '',
    card: 0,
    exp: '',
  };
  onSubmit({ value, valid}: {value: User, valid: boolean }) {
    if (valid === true) {
      this.isValid = 'valid';
    }
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.isValid = 'not valid';
  }
  openConfirmDialog() {
    if(this.confirmDialogRef == null) {
      this.confirmDialogRef = this.dialog.open(ConfirmComponent, {disableClose: true});
      this.confirmDialogRef.afterClosed().subscribe(result => {
        this.confirmDialogRef = null;
      });
    }
  }

}
