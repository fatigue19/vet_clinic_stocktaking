import { Component, OnInit } from '@angular/core';
import {StaffService} from '../services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(public stuff: StaffService) { }

  ngOnInit() {
  }

}
