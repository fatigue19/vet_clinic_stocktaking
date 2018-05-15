import { Component, OnInit, Input, Inject } from '@angular/core';
import { Pet } from '../models/pet';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomersService } from '../services/customers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  // @Input() pet: Pet;

  constructor(
    // public dialogRef: MatDialogRef<PetEditComponent>,
    // @Inject(MAT_DIALOG_DATA) public pet: any,
    public customers: CustomersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  tempPet: Pet;
  ngOnInit() {
    // if (this.pet.id) {
    //   debugger;
    //   this.tempPet = this.pet;
    // } else {
    //   this.tempPet = new Pet();
    // }
    let ident = this.route.snapshot.paramMap.get('id');

    if (ident != null) {
      let id: number = ident ? +ident : 0;
      this.tempPet = this.customers.getPet(id);
     }
    else { 
      this.tempPet = new Pet();
    }
  }

  save() {
    //debugger;
    let item = this.customers.pets.find(a => a.id === this.tempPet.id);

    if (item) {
      let index = this.customers.pets.indexOf(item);

      this.customers.pets[index] = this.tempPet;
    }
    else { 
      this.customers.pets.push(this.tempPet);
    }

    //this.dialogRef.close();
    this.router.navigate(['customers']);
  }

  cancel() {
    //this.dialogRef.close();
    this.router.navigate(['customers']);
  }
}
