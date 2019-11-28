import { Component } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent {
  display = false;

  toggleDialog(): void {
    this.display = !this.display;
  }
}
