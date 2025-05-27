import {
  LandscapeHeader,
  LandscapeTitle,
  LandscapeDivider,
  LandscapeSubtitle,
} from "./elements";

export const LandscapeHeaderBar = () => {
  return (
    <LandscapeHeader>
      <LandscapeTitle>Product Categories</LandscapeTitle>
      <LandscapeDivider />
      <LandscapeSubtitle>Product Landscape Overviews</LandscapeSubtitle>
    </LandscapeHeader>
  );
};
