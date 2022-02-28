import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  compteur:number=0;
  @Input() result;
  @Output() private changementCompteur:EventEmitter<number>= new EventEmitter;


  incrementer(){
    this.compteur++;
    this.changementCompteur.emit(this.compteur);

  }
  decrementer(){
    this.compteur--;
    this.changementCompteur.emit(this.compteur);
  }
  constructor() { }

  ngOnInit() {
  }

}
