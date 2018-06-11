import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numero_um;
  numero_dois;
  resultado;

  constructor(public navCtrl: NavController) {

  }

  adicionar () {
    var A=parseFloat(this.numero_um);
    var B=parseFloat(this.numero_dois);
    this.resultado=A+B;
  }

  subtrair () {
    var A=parseFloat(this.numero_um);
    var B=parseFloat(this.numero_dois);
    this.resultado=A-B;
  }

  multiplicar () {
    var A=parseFloat(this.numero_um);
    var B=parseFloat(this.numero_dois);
    this.resultado=A*B;
  }

  dividir () {
    var A=parseFloat(this.numero_um);
    var B=parseFloat(this.numero_dois);
    this.resultado=A/B;
  }

  limpar () {
    this.numero_um='';
    this.numero_dois='';
    this.resultado='';
  }

}
