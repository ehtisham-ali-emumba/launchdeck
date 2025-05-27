import { useAtom } from "jotai";
import { bookingAtom } from "../../atoms/bookingAtom";

export const useDeleteBooking = () => {
  const [bookings, setBookings] = useAtom(bookingAtom);

  const deleteBooking = (tourId: string) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.tourId !== tourId
    );
    setBookings(updatedBookings);
  };

  return { deleteBooking };
};
