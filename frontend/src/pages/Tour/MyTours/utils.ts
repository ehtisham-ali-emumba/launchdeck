import type { Booking } from "../../../atoms/bookingAtom";
import type { ToursResponse } from "../../../types";

export const filterTours = (
  tours: ToursResponse | undefined,
  bookings: Booking[]
) => {
  if (!tours || !bookings) return [];
  const bookingSet = new Set(bookings.map((booking) => booking.tourId));
  return tours.filter((tour) => bookingSet.has(tour._id));
};
