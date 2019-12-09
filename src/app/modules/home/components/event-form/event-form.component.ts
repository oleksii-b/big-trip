import { Component, OnInit } from '@angular/core';

import eventTypes from '../../../../data/event-types.json';
import offers from '../../../../data/offers.json';
import { IEventType, IEventTypeOffer, IOffer } from '../../types/card.d';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  offers: any[] = [];
  selectedOffers: IOffer[] = [];
  images: string[] = [];
  selectedType: IEventType;
  eventType: IEventType;
  eventTypesKeys: string[];
  eventTypes: {
    [key: string]: {
      label: string;
      values: Array<
        {
          value: string;
          label: string;
        }
      >
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.offers = offers;
    this.images = new Array(5).fill('').map((): string =>
      `http://picsum.photos/300/150?r=${Math.random()}`
    );
    this.eventTypes = eventTypes;
    this.eventTypesKeys = Object.keys(eventTypes);

    const transferTypes = [...this.eventTypes.transfer.values];

    this.selectedType = {
      ...transferTypes[transferTypes.length - 1],
      group: 'transfer',
    };

    this.setOffers(this.selectedType.value);
  }

  setOffers(type: string): void {
    this.selectedOffers = this.offers.find((it: IEventTypeOffer): boolean => it.type === type).offers
  }

  onSelectEventType(type, group): void {
    this.selectedType = {
      ...type,
      group,
    };

    this.setOffers(type.value);
  }
}
