import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements AfterViewInit {
  @ViewChild('dialog', {static: false})
  dialogRef: Dialog;

  display = false;

  toggleDialog(): void {
    this.display = !this.display;
  }

  ngAfterViewInit(): void {
    document.body.appendChild(this.dialogRef.el.nativeElement);
  }
}
