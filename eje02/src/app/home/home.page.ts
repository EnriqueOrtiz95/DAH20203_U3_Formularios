import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public places = [];
  public search = '';


  constructor() {
    //consulta remota
    this.places.push({
      image: 'https://www.tepic.tecnm.mx/images/escudo_itt_200x200.png',
      title: 'El Charco Verde',
      subtitle: 'Santa María del Oro',
      description: 'Este lugar tiene una cascada y puedes practicar deportes extremos',
      active: true
    });

    this.places.push({
      image: 'https://www.tepic.tecnm.mx/images/escudo_itt_200x200.png',
      title: 'El Charco Verde 2',
      subtitle: 'Santa María del Oro 2',
      description: 'Este lugar tiene una cascada y puedes practicar deportes extremos 2',
      active: true
    });

    this.places.push({
      image: 'https://www.tepic.tecnm.mx/images/escudo_itt_200x200.png',
      title: 'El Charco Verde 3',
      subtitle: 'Santa María del Oro 3',
      description: 'Este lugar tiene una cascada y puedes practicar deportes extremos 3',
      active: true
    });

  }

  filter(): void {
    if (this.search && this.search.trim()) {
      this.places = this.places.filter( (place) => {
        return (place.title.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1 );
      });
    }
  }

  deletePlace(position: number): void {
    this.places.splice(position, 1);
  }

  changeStatus(position: number) {
    this.places[position].active = !this.places[position].active;
  }
}
