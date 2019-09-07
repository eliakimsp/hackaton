import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async open() {
    const alert = await this.alertController.create({
      header: 'Opções',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          value: 'Abóbora',
          placeholder: 'Produto'
        },
        {
          name: 'Valor',
          type: 'text',
          id: 'name2-id',
          value: '3.60',
          placeholder: 'Valor'
        },
        {
          name: 'Valor',
          type: 'number',
          id: 'name2-id',
          value: 12,
          placeholder: 'Quantidade em estoque'
        }
      ],
      buttons: ['Excluir', 'OK']
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Cadastrar novo produto',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Produto'
        },
        {
          name: 'Valor',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Valor'
        },
        {
          name: 'Valor',
          type: 'number',
          id: 'name2-id',
          placeholder: 'Quantidade em estoque'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
