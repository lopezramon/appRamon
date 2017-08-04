import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeezerServiceProvider {
  public deezerAPI: string;

  constructor(public http: Http) {
    this.deezerAPI = "http://api.deezer.com/";
    //this.deezerAPI = "/deezerAPI/";
  }
    getUsers(){
      return this.http.get('http://api.myjson.com/bins/mcjrb')
      .map(res => res.json() )
      /*
      .subscribe( users =>{
        console.log(users);
        users.map( userID =>{
          this.getUserDetail(userID);
        });
      */
      }
    

    getUserDetail(userID){
      return this.http.get( this.deezerAPI + 'user/' + userID )
      .map(res => res.json() )
      /*
        .subscribe( data =>{
          console.log(data);
      */
      }

    getUserPlaylist(userID){
      return this.http.get( this.deezerAPI + 'user/' + userID + '/playlists')
      .map(res => res.json() )
      /*
        .subscribe( data =>{
          console.log(data);
      */
      }

    getPlaylistSong(playlistID){
      return this.http.get( this.deezerAPI + 'playlist/' + playlistID + '/tracks')
      .map(res => res.json() )
      /*
        .subscribe( data =>{
          console.log(data);
      */
    }
}
