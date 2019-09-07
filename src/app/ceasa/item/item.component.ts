import { Component, OnInit, Input } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  @Input() image: string;
  @Input() nome: string;
  @Input() preco: number;

  constructor() {}

  ngOnInit() {
    console.log(this.nome)
  }

  open() {
    console.log('Clicou');
  }

}
