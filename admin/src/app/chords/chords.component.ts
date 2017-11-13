import { Component, OnInit } from '@angular/core';
import { ChordService } from '../chord-service.service';
import { ChordModalComponent } from './chordModal/chord-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.css']
})
export class ChordsComponent implements OnInit {
  chordsList = [];
  searchValue = '';
  constructor(private chordSvc: ChordService, private modalService: NgbModal) { }

  ngOnInit() {
    const that = this;
    this.chordSvc.getChords().subscribe((result) => {
      that.chordsList = result.json();
    });
  }

  openAddChordModal() {
    const modalRef = this.modalService.open(ChordModalComponent);
    modalRef.componentInstance.title = 'Save chord';

    modalRef.result.then((data) => {
      this.chordSvc.addChord(data).subscribe((result) => {
        console.log(result);
      });
    });
  }

  openEditChordModal(chord) {
    const modalRef = this.modalService.open(ChordModalComponent);
    modalRef.componentInstance.title = 'Edit chord';
    modalRef.componentInstance.item = chord;

    modalRef.result.then((data) => {
      this.chordSvc.editChord(data).subscribe((result) => {
        console.log(result);
      });
    });
  }

  removeChord(chord) {
    this.chordSvc.deleteChord(chord._id).subscribe((result) => {
      console.log(result);
    });
  }

  search() {
    if (this.searchValue.length > 1) {
      this.chordSvc.searchChord(this.searchValue).subscribe((result) => {
        this.chordsList = result.json();
      });
    } else {
      this.chordSvc.getChords().subscribe((result) => {
        this.chordsList = result.json();
      });
    }
  }
}
