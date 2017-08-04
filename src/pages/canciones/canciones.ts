import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, PopoverController } from 'ionic-angular';
import { DeezerServiceProvider }  from '../../providers/deezer-service/deezer-service';
import { CancionPopoverPage } from '../cancion-popover/cancion-popover';

@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
  providers: [ DeezerServiceProvider ]
})
export class CancionesPage {
public playlist: any;
public songs: any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public ds:DeezerServiceProvider,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController  
  ) {

      this.songs = [];
      this.playlist=this.navParams.get('playlist');
    //console.log(this.playlistID);  
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create();
    loader.present();
    this.ds.getPlaylistSong(this.playlist.id).subscribe( data =>{
      this.songs = data.data;
      loader.dismiss();
      //console.log(this.songs);
    })
  }

  openCancionPopover(event){
    let popover = this.popoverCtrl.create(CancionPopoverPage);
    popover.present({
      ev:event
    });
 
  }

}
