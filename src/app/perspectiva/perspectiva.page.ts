import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perspectiva',
  templateUrl: './perspectiva.page.html',
  styleUrls: ['./perspectiva.page.scss'],
})
export class PerspectivaPage implements OnInit {

  constructor(private navController: Router) { }

  ngOnInit() {
  }

  abrir() {
    this.navController.navigate(['/login']);
  }

}
