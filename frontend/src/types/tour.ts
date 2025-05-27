export interface Tour {
  _id: string;
  name: string;
  city: string;
  description: string;
  price: string;
  duration: string;
  startDate: string;
  endDate: string;
  facilities: string[];
  imageSrc: string;
  images: string[];
}

export type ToursResponse = Tour[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TSFixMe = any;
