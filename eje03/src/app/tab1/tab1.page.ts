import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  students: Student[] = new Array();
  search: string;

  constructor(private studentService: StudentService, private alert: AlertController, private router: Router) {
    this.getAll();
  }

  changeStatus(pos: number): void {
    this.studentService.changeStatus(pos);
  }

  operation(pos: number, ev: { detail: { side }}): void {
    if (ev.detail.side === 'start'){
      this.studentService.changeStatus(pos);
    }else {
      this.showAlert(pos);
    }
  }

  getAll(): void{
    this.students = this.studentService.getStudents();
  }

  async showAlert(pos: number) {
    const al = await this.alert.create({
      header: 'Confirmar',
      message: '¿Seguro que desea eliminar?',
      buttons: [{
        text: 'No'
      }, {
        text: 'Si',
        handler: () => {
          this.studentService.deleteStudent(pos);
          this.filter();
        }
      }]
    });
    await al.present();
  }

  filter(): void{
    this.getAll();
    if (this.search && this.search.trim()) {
      this.students = this.students.filter( (student) => {
        return (student.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
      });
    }
  }

  newStudent(){
    this.router.navigate(['/new-student']);
  }

}