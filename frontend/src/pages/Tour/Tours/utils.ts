import type { Tour } from "../../../types";

export function parsePriceRange(
  price?: string | null
): [number | null, number | null] {
  if (!price) return [null, null];
  const [start, end] = price.split("-").map((p) => parseFloat(p));
  return [start, end];
}

interface FilterOptions {
  city?: string | null;
  startPrice?: number | null;
  endPrice?: number | null;
  start_date?: string | null;
  end_date?: string | null;
}

export function filterTours(
  tours: Tour[] = [],
  { city, startPrice, endPrice, start_date, end_date }: FilterOptions
): Tour[] {
  let filtered = tours;

  // Filter by city
  if (city) {
    filtered = filtered.filter(
      (tour) => tour.city.toLowerCase() === city.toLowerCase()
    );
  }

  // Filter by price range
  if (startPrice !== null && endPrice !== null) {
    filtered = filtered.filter((tour) => {
      const tourPrice = parseFloat(tour.price);
      return tourPrice >= startPrice! && tourPrice <= endPrice!;
    });
  }

  // Filter by date range
  if (start_date && end_date) {
    const filterStartDate = new Date(start_date);
    const filterEndDate = new Date(end_date);
    filtered = filtered.filter((tour) => {
      const tourStartDate = new Date(tour.startDate);
      const tourEndDate = new Date(tour.endDate);

      return tourStartDate <= filterEndDate && tourEndDate >= filterStartDate;
    });
  }

  return filtered;
}
