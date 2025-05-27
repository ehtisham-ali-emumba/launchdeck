import { useNavigate, useLocation } from "react-router-dom";
import { useTourQuery } from "../../../hooks/queries";
import { Loader } from "../../../components";
import ErrorContainer from "../../../components/ErrorContainer";
import { useAtom } from "jotai";
import { bookingAtom } from "../../../atoms/bookingAtom";
import { useMemo } from "react";
import { useDeleteBooking } from "../../../hooks/atoms/useDeleteBooking";
import { BlankSlate } from "../../../components";
import { uiStrings } from "../../../constants";
import { Box, Container, ContentTitle } from "./elements";
import { CardWrapper } from "../common/TourCard/elements";
import { TourCard } from "../common/TourCard";
import { filterTours, parsePriceRange } from "./utils";

export const Tours = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");
  const price = queryParams.get("price");
  const start_date = queryParams.get("start_date");
  const end_date = queryParams.get("end_date");

  const { data: tours, isLoading, error } = useTourQuery();
  const [bookings] = useAtom(bookingAtom);
  const { deleteBooking } = useDeleteBooking();

  const bookingMap = useMemo(
    () => new Map(bookings.map((booking) => [booking.tourId, booking])),
    [bookings]
  );
  const [startPrice, endPrice] = useMemo(() => parsePriceRange(price), [price]);
  const filteredTours = useMemo(
    () =>
      filterTours(tours ?? [], {
        city,
        startPrice,
        endPrice,
        start_date,
        end_date,
      }),
    [city, tours, startPrice, endPrice, start_date, end_date]
  );

  return (
    <Container>
      <Box>
        <ContentTitle>
          {`${uiStrings.topDestinations}${city ? ` at "${city}"` : ""}`}
        </ContentTitle>

        {isLoading && !filteredTours.length ? (
          <Loader />
        ) : error ? (
          <ErrorContainer message={`Error: ${error.message}`} />
        ) : (
          <CardWrapper>
            {filteredTours.length
              ? filteredTours.map((tour) => {
                  const hasBooking = bookingMap.has(tour._id);
                  return (
                    <TourCard
                      key={tour._id}
                      id={tour._id}
                      imageSrc={tour.imageSrc}
                      title={tour.name}
                      description={tour.description}
                      price={tour.price}
                      duration={tour.duration}
                      hasBooking={hasBooking}
                      onUpdateBooking={() => navigate(`/book/tour/${tour._id}`)}
                      onDeleteBooking={() => deleteBooking(tour._id)}
                    />
                  );
                })
              : !isLoading && !filteredTours.length && <BlankSlate />}
          </CardWrapper>
        )}
      </Box>
    </Container>
  );
};
