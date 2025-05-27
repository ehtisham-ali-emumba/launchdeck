export interface CardProps {
  imageSrc: string;
  onClick?: () => void;
  imageHeight: number;
  dimensions: {
    width: number;
    height: number;
  };
  imageStyles?: React.CSSProperties;
  footerStyles?: React.CSSProperties;
  renderLowerLeft?: () => React.ReactNode;
  renderLowerRight?: () => React.ReactNode;
  renderUpperLeft?: () => React.ReactNode;
  renderUpperRight?: () => React.ReactNode;
  renderContent?: () => React.ReactNode;
  url: string;
}

export type StyledBaseCardType = {
  dimensions: {
    width: number;
    height: number;
  };
  imageHeight: number;
};
