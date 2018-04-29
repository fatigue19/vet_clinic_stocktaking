import { Component, OnInit, Input, Inject } from '@angular/core';
import { Pet } from '../models/pet';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

// @Input() pet: Pet;

  constructor(public dialogRef: MatDialogRef<PetEditComponent>,
    @Inject(MAT_DIALOG_DATA) public pet: Pet) { }

  ngOnInit() {
  }

}
