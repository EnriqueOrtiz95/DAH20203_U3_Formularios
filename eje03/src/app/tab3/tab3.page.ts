import { Component } from '@angular/core';
import {Student} from '../models/student';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  students: Student[] = new Array();

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

}
