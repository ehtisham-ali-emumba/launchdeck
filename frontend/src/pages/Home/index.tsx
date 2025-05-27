import { images_png } from "../../assets";
import { MainDecoration } from "../../assets/svg";
import {
  HeroContent,
  HeroTitle,
  TitleUnderline,
  HeroSubtitle,
  ImagesGrid,
  ImageGallery,
  FlexCol,
  HomeContainer,
  GalleryWrapper,
  SvgParent,
  ImageTileLg,
  ImageTileSm,
} from "./elements";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { ContentSection } from "../../styles";
import { uiStrings } from "../../constants/uiStrings";

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <ContentSection>
          <HeroContent>
            <HeroTitle>
              <TitleUnderline>{uiStrings.explore}</TitleUnderline>
              {uiStrings.homepage_title}
            </HeroTitle>
            <HeroSubtitle>{uiStrings.homepage_subtitle}</HeroSubtitle>
            <Link to="/explore">
              <Button>{uiStrings.exploreNews}</Button>
            </Link>
          </HeroContent>
        </ContentSection>
        <ImagesGrid>
          <SvgParent>
            <MainDecoration />
          </SvgParent>
          <GalleryWrapper>
            <ImageGallery>
              <ImageTileLg image={images_png.homeMain1} />
              <FlexCol>
                <ImageTileSm image={images_png.city} />
                <ImageTileSm image={images_png.city} />
              </FlexCol>
            </ImageGallery>
          </GalleryWrapper>
        </ImagesGrid>
      </HomeContainer>
      <div style={{ marginTop: "80px" }} />
    </>
  );
};
