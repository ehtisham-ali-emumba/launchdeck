export interface AutoCardProps {
  name: string;
  id: number;
  brandId: number;
  modelYear: number;
  price: number;
  engine: string;
  fuelType: string;
  color: string;
  imageSrc: string;
  onClick?: () => void;
  className?: string;
  description: string;
  chipText?: string;
  onEditClick?: (id: number) => void;
  onDeleteClick?: (id: number) => void;
}
