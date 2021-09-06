import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEdit, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Adidy } from 'src/app/adidy';
import { AdidyService } from 'src/app/services/adidy.service';

@Component({
  selector: 'app-adidy',
  templateUrl: './adidy.component.html',
  styleUrls: ['./adidy.component.css']
})
export class AdidyComponent implements OnInit {
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrashAlt;
  adidyList: Adidy[] = [];
  toEdit: any = {};
  toDelete: any = {};

  constructor(private service: AdidyService) { }

  ngOnInit(): void {
    this.fetchAdidy();
  }

  fetchAdidy() {
    this.service.getAllAdidy().subscribe(response => {
      if (response.success) {
        this.adidyList = response.adidy;
      }
    });
  }

  onAddSubmit(form: NgForm) {
    document.getElementById('close-add')?.click();

    const mpandray = form.value.mpandray;
    const beginAt = form.value.beginAt;
    const endAt = form.value.endAt;
    const total = form.value.total;

    const reqObj = {
      mpandray: mpandray,
      beginAt: beginAt,
      endAt: endAt,
      total: total
    };

    this.service.createAdidy(reqObj).subscribe(response => {
      if (response.success) {
        this.adidyList = response.adidy;
      }
    });
  }

  onHandleEdit(adidy: any) {
    this.toEdit = adidy;
  }

  onEditSubmit(form: NgForm) {
    document.getElementById('close-edit')?.click();

    const id = form.value.id;
    const mpandray = form.value.mpandray;
    const beginAt = form.value.beginAt;
    const endAt = form.value.endAt;
    const total = form.value.total;

    const reqObj = {
      id: id,
      mpandray: mpandray,
      beginAt: beginAt,
      endAt: endAt,
      total: total
    };

    this.service.updateAdidy(reqObj).subscribe(response => {
      if (response.success) {
        this.adidyList = response.adidy;
      }
    });
  }

  onHandleDelete(adidy: any) {
    this.toDelete = adidy;
  }

  removeAdidy(adidy: Adidy) {
    document.getElementById('close-delete')?.click();

    this.service.deleteAdidy(adidy).subscribe(response => {
      if (response.success) {
        this.adidyList = response.adidy;
      }
    });
  }
}
