import { Component, OnInit } from '@angular/core';
import { PhraseService } from '../phrase-service.service';
import { PhraseModalComponent } from './phraseModal/phrase-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.css']
})
export class PhrasesComponent implements OnInit {
  phrasesList = [];
  searchValue = '';
  constructor(private phraseSvc: PhraseService, private modalService: NgbModal) { }

  ngOnInit() {
    const that = this;
    this.phraseSvc.getPhrases().subscribe((result) => {
      that.phrasesList = result.json();
    });
  }

  openAddPhraseModal() {
    const modalRef = this.modalService.open(PhraseModalComponent);
    modalRef.componentInstance.title = 'Save phrase';

    modalRef.result.then((data) => {
      this.phraseSvc.addPhrase(data).subscribe((result) => {
        console.log(result);
      });
    });
  }

  openEditPhraseModal(phrase) {
    const modalRef = this.modalService.open(PhraseModalComponent);
    modalRef.componentInstance.title = 'Edit phrase';
    modalRef.componentInstance.item = phrase;

    modalRef.result.then((data) => {
      this.phraseSvc.editPhrase(data).subscribe((result) => {
        console.log(result);
      });
    });
  }

  removePhrase(phrase) {
    this.phraseSvc.deletePhrase(phrase._id).subscribe((result) => {
      console.log(result);
    });
  }

  search() {
    if (this.searchValue.length > 1) {
      this.phraseSvc.searchPhrase(this.searchValue).subscribe((result) => {
        this.phrasesList = result.json();
      });
    } else {
      this.phraseSvc.getPhrases().subscribe((result) => {
        this.phrasesList = result.json();
      });
    }
  }
}
