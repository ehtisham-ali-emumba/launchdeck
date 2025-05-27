import { atomWithStorage } from "jotai/utils";

export type Booking = {
  name: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  paymentMethod: string;
  tourId: string;
  countryCode: string;
};

export const bookingAtom = atomWithStorage<Booking[]>("bookings", []);
