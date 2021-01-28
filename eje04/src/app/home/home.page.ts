import { Component } from '@angular/core';
import { profile } from 'console';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public profiles = [];
  public profilesO = [];
  search: string;

  constructor(private alert: AlertController) {

    this.profiles.push(
      {
        photo: 'https://sites.google.com/site/aplicacionesempresarialestec/_/rsrc/1472870214559/IsraelArjona.png?height=200&width=175',
        name: 'Israel Arjona Vizcaíno',
        place: 'Santa María del Oro',
        loveCount: 0,
        likeCount: 0,
        interest: [{description: 'Música', color: '#A1A1A1'}, {description: 'Deportes', color: '#A1A1A1'}]
      }
    );

    this.profiles.push({
      photo: 'https://scontent.fpvr1-1.fna.fbcdn.net/v/t1.0-9/125164695_2335978416548569_260520111468624783_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFWvksRtyD0uO9-R3gCECL6Tz7Sv1xtVcxPPtK_XG1VzOYrZ17IQzKkNgcgWjaw8Ve5xrOAw9GubeWEo9MDYh0m&_nc_ohc=z-O2ZPepqwMAX8n-ZGi&_nc_ht=scontent.fpvr1-1.fna&oh=111fa688e3affdd47593bd9124d57509&oe=5FDB059A',
      name: 'Adriana Flores Ramirez',
      place: 'Zomatlán',
      loveCount: 60 ,
      likeCount: 40 ,
      interest: [{description: 'Música', color: '#A1A1A1'}, {description: 'Futbol Flag', color: '#A1A1A1'}]
    });


    this.profilesO.push(
      {
        photo: 'https://sites.google.com/site/aplicacionesempresarialestec/_/rsrc/1472870214559/IsraelArjona.png?height=200&width=175',
        name: 'Israel Arjona Vizcaíno',
        place: 'Santa María del Oro',
        loveCount: 0,
        likeCount: 0,
        interest: [{description: 'Música', color: '#A1A1A1'}, {description: 'Deportes', color: '#A1A1A1'}]
      }
    );

    this.profilesO.push({
      photo: 'https://scontent.fpvr1-1.fna.fbcdn.net/v/t1.0-9/125164695_2335978416548569_260520111468624783_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFWvksRtyD0uO9-R3gCECL6Tz7Sv1xtVcxPPtK_XG1VzOYrZ17IQzKkNgcgWjaw8Ve5xrOAw9GubeWEo9MDYh0m&_nc_ohc=z-O2ZPepqwMAX8n-ZGi&_nc_ht=scontent.fpvr1-1.fna&oh=111fa688e3affdd47593bd9124d57509&oe=5FDB059A',
      name: 'Adriana Flores Ramirez',
      place: 'Zomatlán',
      loveCount: 60 ,
      likeCount: 40 ,
      interest: [{description: 'Música', color: '#A1A1A1'}, {description: 'Futbol Flag', color: '#A1A1A1'}]
    });

  }

  increaseCount(type: number, position: number): void{
    if(type===0){
      this.profiles[position].loveCount ++;
    }else{
      this.profiles[position].likeCount ++;
    }
  }


  getAll(): void{
    this.profiles = this.profilesO;
  }

  operation(pos: number){
    this.showAlert(pos);
  }

  deleteStudent(position: number): void{
    this.profiles.splice(position, 1);
    this.profilesO.splice(position, 1);
  }

  async showAlert(pos: number){
    const al = await this.alert.create({
      header: 'Confirmar',
      message: '¿Seguro que desea eliminar?',
      buttons: [{
        text: 'No'
      }, {
        text: 'Si',
        handler: () => {
          this.deleteStudent(pos);
          this.filter();
        }
      }]
    });
    await al.present();
  }

  filter(): void{
    this.getAll();
    if (this.search && this.search.trim()) {
      this.profiles = this.profiles.filter( (profile) => {
        return (profile.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
      });
    }
  }

}
