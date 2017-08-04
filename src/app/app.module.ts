import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
  
//Pages
import { MyApp }              from './app.component';
import { InicioPage }         from '../pages/inicio/inicio';
import { PerfilesPage }       from '../pages/perfiles/perfiles';
import { ContactosPage }      from '../pages/contactos/contactos';
import { AcercaPage }         from '../pages/acerca/acerca';
import { PlaylistPage }       from '../pages/playlist/playlist';
import { CancionesPage }      from '../pages/canciones/canciones';
import { PerfilDetallePage }  from '../pages/perfil-detalle/perfil-detalle';
import { CancionPopoverPage } from '../pages/cancion-popover/cancion-popover';

//Provider
import { DeezerServiceProvider } from '../providers/deezer-service/deezer-service';


@NgModule({
  declarations: [
    MyApp,
  
    InicioPage,
    PerfilesPage,
    ContactosPage,
    AcercaPage,
    PlaylistPage,
    PerfilDetallePage,
    CancionesPage,
    CancionPopoverPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PerfilesPage,
    ContactosPage,
    PerfilDetallePage,
    AcercaPage,
    PlaylistPage,
    CancionesPage,
    CancionPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeezerServiceProvider
  ]
})
export class AppModule {}
