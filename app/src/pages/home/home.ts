import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChordProvider } from '../../providers/data/chords';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chordList: any[];

  constructor(public navCtrl: NavController, private chordSvc: ChordProvider) {}

  search(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.chordSvc.getChord(val).subscribe((response: any) => {
        this.chordList = response.json();
        console.log(response);
      });
    }
  }
}
