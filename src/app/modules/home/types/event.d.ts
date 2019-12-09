export interface IEventType {
  value: string;
  label: string;
  group?: string;
}

export interface IEventTypeOffer {
  type: string;
  offers: IOffer[];
}

export interface IOffer {
  name: string;
  title: string;
  price: number;
}
