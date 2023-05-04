import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.scss'],
})
export class ContactPage {

  constructor(private alertController: AlertController) {}

  async onSubmit(form: NgForm) {
    // Send email logic here

    // Display alert
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Contact information sent!',
      buttons: ['OK']
    });
    await alert.present();

    // Clear form fields
    form.reset();
  }

}
