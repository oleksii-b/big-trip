export interface Point {
  id?: string;
  type: string;
  date_from: number;
  date_to: number;
  destination: {
    name: string;
    description: string;
    pictures: Picture[];

  };
  base_price: number;
  is_favorite: boolean;
  offers: Offer[];
}

export interface Picture {
  src: string;
  description: string;
}

export interface Offer {
  title: string;
  price: number;
  accepted: boolean;
}
