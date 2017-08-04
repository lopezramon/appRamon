import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PlaylistPage }  from '../playlist/playlist';
import { DeezerServiceProvider }  from '../../providers/deezer-service/deezer-service';
import { Observable }  from 'rxjs/Rx';
import 'rxjs/add/observable/merge';


@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers: [ DeezerServiceProvider ]
})
export class PerfilesPage {

  public users: any;
  public loader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ds:DeezerServiceProvider,
    public loadingCtrl: LoadingController
  ) {

      this.users = [];
      this.loader = this.loadingCtrl.create();
  }

  goToPlaylist(user){
      this.navCtrl.push(PlaylistPage, {user:user});
  }

  ionViewDidLoad() {
    this.loader.present();
    //this.loader.dismiss();
    
    this.ds.getUsers().subscribe( userIDs =>{
      /*userIDs.map( userID =>{
        this.ds.getUserDetail(userID).subscribe( user =>{
          this.users.push(user); 
          console.log(this.users);
        });
      });*/
    let sources = userIDs.map( userID => this.ds.getUserDetail(userID));
    Observable.merge(...sources).subscribe(
      data=> this.users.push(data),
      error => console.log(error),
      () => this.loader.dismiss()
    );
    
    console.log(sources);  
  }); 
  }
}
