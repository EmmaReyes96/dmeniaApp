import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicAlertService {

  constructor(
    private alertCtrl: AlertController,
    ) { }

  async presentAlertConfirm(title: string, msg: string) {
    let data1;
    const alert = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            alert.dismiss(false);
                    return false;
          }
        }, {
          text: 'Okay',
          handler: () => {
            alert.dismiss(true);
                    return false;
          }
        }
      ]
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
      data1 = data
    })
    return data1
  }

  async presentAlert(title, msg) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
