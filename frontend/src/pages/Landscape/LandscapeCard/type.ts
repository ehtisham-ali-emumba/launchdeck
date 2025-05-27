export interface LandscapeCardProps {
  fullName: string;
  userName: string;
  imageSrc: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  className?: string;
  onClick?: () => void;
}
