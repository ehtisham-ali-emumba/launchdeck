import { useMemo } from "react";

import { useNavigate } from "react-router-dom";

import { useAtom } from "jotai";

import { bookingAtom } from "../../../atoms/bookingAtom";
import { BlankSlate } from "../../../components";
import { Loader } from "../../../components";
import ErrorContainer from "../../../components/ErrorContainer";
import { uiStrings } from "../../../constants/uiStrings";
import { useDeleteBooking } from "../../../hooks/atoms/useDeleteBooking";
import { useTourQuery } from "../../../hooks/queries";
import { TourCard } from "../common/TourCard";
import { CardWrapper } from "../common/TourCard/elements";

import { Box, Heading, MyTourContainer } from "./elements";
import { filterTours } from "./utils";

export const MyTours = () => {
  const navigate = useNavigate();
  const { data: tours, isLoading, error } = useTourQuery();
  const [bookings] = useAtom(bookingAtom);
  const { deleteBooking } = useDeleteBooking();

  const filterMyTours = useMemo(
    () => filterTours(tours, bookings),
    [tours, bookings]
  );

  return (
    <MyTourContainer>
      <Box>
        <Heading>{uiStrings.myTours}</Heading>
        {isLoading && !filterMyTours.length ? (
          <Loader />
        ) : error ? (
          <ErrorContainer message={`Error: ${error.message}`} />
        ) : (
          <CardWrapper>
            {filterMyTours.length
              ? filterMyTours.map(tour => {
                  return (
                    <TourCard
                      key={tour._id}
                      id={tour._id}
                      imageSrc={tour.imageSrc}
                      title={tour.name}
                      description={tour.description}
                      price={tour.price}
                      duration={tour.duration}
                      hasBooking
                      onUpdateBooking={() => navigate(`/book/tour/${tour._id}`)}
                      onDeleteBooking={() => deleteBooking(tour._id)}
                    />
                  );
                })
              : !isLoading && !filterMyTours.length && <BlankSlate />}
          </CardWrapper>
        )}
      </Box>
    </MyTourContainer>
  );
};
