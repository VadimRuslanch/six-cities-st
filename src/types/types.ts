export interface CardCity {
  id: number;
  imgPath: string;
  price: number;
  name: string;
  type: string;
  mark?: string;
  lat: number;
  lng: number;
}

export type City = {
  lat: number;
  lng: number;
  zoom: number;
}

export interface Point {
  title: string;
  lat: number;
  lng: number;
}

export type Points = Point[];
