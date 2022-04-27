import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gridOptions = <GridOptions>{};
  columnDefs = [
    {
      headerName: 'Ful Name',
      field: 'fulName',
      width: 160,
    },
    { headerName: 'Age', field: 'age', width: 160 },
    { headerName: 'City', field: 'city', width: 160 },
  ];
  rowData = [];

  detailform = new FormGroup({
    firstname: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
    dob: new FormControl(null, Validators.required),
    city: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  });

  addDetail() {
    if (
      this.detailform.value.firstname != null &&
      this.detailform.value.lastName != null &&
      this.detailform.value.dob != null &&
      this.detailform.value.city != null
    ) {
      let fulName =
        this.detailform.value.firstname + ' ' + this.detailform.value.lastName;
      let city = this.detailform.value.city;
      let age = this.detailform.value.dob;
      let showAge;
      if (age) {
        const convertAge = new Date(age);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        showAge = Math.floor(timeDiff / 31556952000);
      }

      let newData = {
        fulName: fulName,
        age: showAge,
        city: city,
      };

      this.rowData.push(newData);
      this.rowData = JSON.parse(JSON.stringify(this.rowData));
      this.detailform.reset();
    }
  }
}
