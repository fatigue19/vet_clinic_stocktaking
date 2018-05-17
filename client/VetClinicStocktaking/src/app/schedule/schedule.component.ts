import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { CalendarEvent } from 'angular-calendar';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Schedule } from '../models/schedule';
import { map } from 'rxjs/operators/map';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  constructor(
    public schedule: ScheduleService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  displayedColumns = ['customer', 'employee', 'date', 'comment', 'action'];
  dataSource = new MatTableDataSource(this.schedule.schedules);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  edit(element: Schedule) {
    this.router.navigate(['edit-schedule/' + element.id]);
  }

  add() {
    this.router.navigate(['edit-schedule']);
  }

  remove(element: Schedule) {
    this.schedule.removeSchedule(element.id);
    this.dataSource.data = this.schedule.schedules;
  }
}
