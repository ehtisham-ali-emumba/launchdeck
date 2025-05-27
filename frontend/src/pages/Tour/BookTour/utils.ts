import * as Yup from "yup";
import type { Booking } from "../../../atoms/bookingAtom";

export const bookFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits"),
  adults: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" || isNaN(originalValue) ? undefined : value
    )
    .required("Number of adults is required")
    .typeError("Number of adults must be a valid number")
    .min(1, "At least 1 adult is required"),
  children: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" || isNaN(originalValue) ? undefined : value
    )
    .required("Number of children is required")
    .typeError("Number of children must be a valid number")
    .min(0, "Cannot be negative"),
  paymentMethod: Yup.string().required("Payment method is required"),
  countryCode: Yup.string().required("Country code is required"),
});

export const isBookingExists = (bookings: Booking[], tourId: string) => {
  return !!bookings.find((booking) => booking.tourId === tourId);
};

export const getBookingByTourId = (bookings: Booking[], tourId: string) => {
  return bookings.find((booking) => booking.tourId === tourId);
};

export const removeBookingByTourId = (bookings: Booking[], tourId: string) => {
  return bookings.filter((booking) => booking.tourId !== tourId);
};

export const formDefaultValues = {
  name: "",
  email: "",
  phone: "",
  adults: 0,
  children: 0,
  paymentMethod: "",
  countryCode: "+1",
};

export const paymentMethodsStyle = { width: "100%" };
