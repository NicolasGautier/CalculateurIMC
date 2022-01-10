import { Component } from '@angular/core';

// Décorateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  poids = '';
  taille ='';
  imc = '';
  qualifier = '';

  /* Méthode avec un bouton calculer
  onCalculImc(){
    this.imc = this.poids / (this.taille * this.taille);
  }*/

  constructor() {}

  /*ngOnInit() {
  }*/

  //Calcul en cours de remplissage
  calcul() {
    //let n'existe que dans la méthode
    let poids = parseFloat(this.poids);
    let taille = parseFloat(this.taille);
    let imc = '';
    let tranche = 0;
    let result = 0;

    //Calcul de l'imc
    result = poids / (taille * taille);

    //Imc arrondi
    tranche = Math.round((result)*100)/100;

    //Cast de l'imc pour affichage
    this.imc = (Math.round((result)*100)/100).toString();

    //Test que l'IMC est un nombre
    if(isNaN(Number(this.imc))){
      this.imc = 'en cours de calcul ';
    }

    //Test de la tranche d'IMC pour affichage du qualifier
    //TODO : changer les classes : normal : alert-success, maigreur : alert-warning, obésité alert-danger
    if(tranche<18.5){
    this.qualifier = "maigreur";
  } else if (tranche<25){
    this.qualifier = "normal";
  } else if (tranche<30){
    this.qualifier = "surpoids";
  } else if (tranche<35){
    this.qualifier = "obésité modérée"
  }else if (tranche<40) {
    this.qualifier = "obésité sévère"
  } else if (tranche<100){
    this.qualifier = "obésité morbide"
  } else {
        this.qualifier = "Quel suspense..."
    }
  }
}
