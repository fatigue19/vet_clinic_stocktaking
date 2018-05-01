import { Component, OnInit, Input, Inject } from '@angular/core';
import { Pet } from '../models/pet';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  // @Input() pet: Pet;

  constructor(public dialogRef: MatDialogRef<PetEditComponent>,
    @Inject(MAT_DIALOG_DATA) public pet: Pet, public customers: CustomersService) { }


  tempPet: Pet;
  ngOnInit() {
    this.tempPet = this.pet;
  }

  save() {

    let item = this.customers.pets.find((a) => a.id === this.tempPet.id);

    let index = this.customers.pets.indexOf(item);

    this.customers.pets[index] = this.tempPet;

    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

}
