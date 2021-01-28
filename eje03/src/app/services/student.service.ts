import { Injectable } from '@angular/core';
import {Student} from '../models/student'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

private students: Student[] = new Array; 

  constructor() { 
    this.students.push({
      name: 'Adriana Flores Ramirez',
      controlnumber: '16400911',
      active: true
    }); 
    this.students.push({
      name: 'Kevin Esquivel Ramirez',
      controlnumber: '16400902',
      active: true
    });
    this.students.push({
      name: 'Michel Campos Aguirre',
      controlnumber: '16400812',
      active: false
    });
  }

  getStudents(): Student[]{
    return this.students;
  }

  changeStatus(position: number): void{
    this.students[position].active = !this.students[position].active;
  }

  deleteStudent(position: number): void{
    this.students.splice(position, 1);
  }

  newStudent(student: Student): void{
    this.students.push(student);
  }
}
