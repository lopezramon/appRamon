import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage }     from "../pages/inicio/inicio";
import { PerfilesPage }   from '../pages/perfiles/perfiles';
import { ContactosPage }  from '../pages/contactos/contactos';
import { AcercaPage }     from '../pages/acerca/acerca';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {  
  @ViewChild('NAV') nav:Nav;
  public rootPage:any;
  public pages: Array<{titulo: string, component:any, icon:string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  
    this.rootPage=InicioPage;
    this.pages = [
          {titulo:'Inicio',    component: InicioPage,    icon:'home'},
          {titulo:'Perfiles',  component: PerfilesPage,  icon:'person'},
          {titulo:'Contactos', component: ContactosPage, icon:'mail'},
          {titulo:'Acerca',    component: AcercaPage,    icon:'information-circle'}
  ];
  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(pages){
    this.nav.setRoot(pages);
  }
}

