import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './chord-modal.component.html'
})
export class ChordModalComponent {
  @Input() title;
  @Input() item;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.item = this.item ? this.item : {};
  }

  save() {
    this.activeModal.close(this.item);
  }
}
