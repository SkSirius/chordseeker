import { Component, OnInit } from '@angular/core';
import { KeyService } from '../key-service.service';
import { KeyModalComponent } from './keyModal/key-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {
  keysList = [];
  searchValue = '';
  constructor(private keySvc: KeyService, private modalService: NgbModal) { }

  ngOnInit() {
    const that = this;
    this.keySvc.getKeys().subscribe((result) => {
      that.keysList = result.json();
    });
  }

  openAddKeyModal() {
    const modalRef = this.modalService.open(KeyModalComponent);
    modalRef.componentInstance.title = 'Save key';

    modalRef.result.then((data) => {
      this.keySvc.addKey(data).subscribe((result) => {
        console.log(result);
      });
    });
  }

  openEditKeyModal(key) {
    const modalRef = this.modalService.open(KeyModalComponent);
    modalRef.componentInstance.title = 'Edit key';
    modalRef.componentInstance.item = key;

    modalRef.result.then((data) => {
      this.keySvc.editKey(data).subscribe((result) => {
        console.log(result);
      });
    });
  }

  removeKey(key) {
    this.keySvc.deleteKey(key._id).subscribe((result) => {
      console.log(result);
    });
  }

  search() {
    if (this.searchValue.length > 1) {
      this.keySvc.searchKey(this.searchValue).subscribe((result) => {
        this.keysList = result.json();
      });
    } else {
      this.keySvc.getKeys().subscribe((result) => {
        this.keysList = result.json();
      });
    }
  }
}
