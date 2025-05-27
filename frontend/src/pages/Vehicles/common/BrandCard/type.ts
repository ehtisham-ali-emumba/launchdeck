export interface BrandCardProps {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  onClick?: () => void;
  className?: string;
  onEditClick?: (id: number) => void;
  onDeleteClick?: (id: number) => void;
}
