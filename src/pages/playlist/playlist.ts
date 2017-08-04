import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { DeezerServiceProvider }  from '../../providers/deezer-service/deezer-service';
import {CancionesPage} from '../canciones/canciones';
import {PerfilDetallePage} from '../perfil-detalle/perfil-detalle';


@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
  providers: [ DeezerServiceProvider ]
})
export class PlaylistPage {

  public user: any;
  public playlists: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public ds:DeezerServiceProvider,
    public loadingCtrl: LoadingController,  
    public modalCtrl: ModalController  
  ) {
  
      this.playlists = [];
      this.user= this.navParams.get('user');
      //this.loader = this.loadingCtrl.create();
  
  }

  goToCanciones(playlist){
    this.navCtrl.push(CancionesPage, { playlist:playlist });
  }
  
  goToPerfil(user,playlists){
    let modal = this.modalCtrl.create(PerfilDetallePage, {
      user:      user,
      playlists:  playlists
    });
    modal.present();
    modal.onDidDismiss(data => console.log(data));
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create();
    loader.present();
    this.ds.getUserPlaylist(this.user.id).subscribe(data =>{
      this.playlists = data.data;
      loader.dismiss();
      //console.log(this.playlists);

    })
  }
}
