import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements AfterViewInit {
  @ViewChild('dialog', {static: false})
  dialogRef: ElementRef;

  display = false;

  toggleDialog(): void {
    this.display = !this.display;
  }

  ngAfterViewInit(): void {
    document.body.appendChild(this.dialogRef.el.nativeElement);
  }
}
