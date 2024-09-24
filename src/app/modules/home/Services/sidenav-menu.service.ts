import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavMenuService {


  private sidenav!: MatSidenav;

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    } else {
      console.error('Sidenav não foi definido.');
    }
  }

  openSidenav() {
    if (this.sidenav) {
      this.sidenav.open();
    }
  }

  closeSidenav() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }
}
