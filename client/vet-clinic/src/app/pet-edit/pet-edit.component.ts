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

  constructor(
    public customers: CustomersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  tempPet: Pet;
  ngOnInit() {
    const ident = this.route.snapshot.paramMap.get('id');

    if (ident != null) {
      const id: number = ident ? +ident : 0;
      this.tempPet = this.customers.getPet(id);
    } else {
      this.tempPet = new Pet();
    }
  }

  save() {
    const item = this.customers.pets.find(a => a.id === this.tempPet.id);

    if (item) {
      const index = this.customers.pets.indexOf(item);

      this.customers.pets[index] = this.tempPet;
    } else {
      this.customers.pets.push(this.tempPet);
    }
    this.router.navigate(['customers']);
  }

  cancel() {
    this.router.navigate(['customers']);
  }
}
