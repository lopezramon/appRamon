import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {

  constructor(
    public navCtrl:    NavController,
    public navParams:  NavParams,
    public alertCtrl:  AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

  enviar() {
    let alert = this.alertCtrl.create({
      title: 'Contacto!',
      subTitle: 'Tu peticion se a guaradado con exito..!!',
      buttons: ['OK']
    });
    alert.present();
  }

}
