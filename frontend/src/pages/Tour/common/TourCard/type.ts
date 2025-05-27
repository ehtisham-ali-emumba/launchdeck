export interface TourCardProps {
  id: string;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  className?: string;
  onClick?: () => void;
  hasBooking?: boolean;
  onDeleteBooking?: () => void;
  onUpdateBooking?: () => void;
}
