import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-rec-contra',
  templateUrl: './rec-contra.page.html',
  styleUrls: ['./rec-contra.page.scss'],
})
export class RecContraPage implements OnInit {

  constructor(private router: Router, private location: Location) {}

  goBack() {
    this.location.back();
  }
  ngOnInit() {
  }

}
