import { Component, OnInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdInput} from '@angular2-material/input';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-dogs',
  templateUrl: 'dogs.component.html',
  styleUrls: ['dogs.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MdIcon,
    MdButton,
    MdInput
  ],
  providers: [MdIconRegistry],
})
export class DogsComponent implements OnInit {
  dogs: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.dogs = af.database.list('/dogs');
  }

  postDog(value) {
    this.dogs.push(value);
  }

  ngOnInit() {
  }

}
