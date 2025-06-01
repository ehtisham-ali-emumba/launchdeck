import { Link, useParams } from "react-router-dom";

import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { Flex } from "antd";

import { Loader } from "../../../components";
import ErrorContainer from "../../../components/ErrorContainer";
import { Spacer } from "../../../components/Spacer";
import { uiStrings } from "../../../constants/uiStrings";
import { useTourQueryById } from "../../../hooks/queries";
import { ContentWrapper, Header, Layout } from "../../../styles";
import { getPriceLabel } from "../../../utils/priceUtils";

import {
  Container2,
  InfoRow,
  TourTitle,
  InfoIcon,
  PriceText,
  InfoText,
  Padder,
  Wrapper,
  DescriptionText,
  InfoBox,
  BookNowButton,
} from "./elements";
import { ImageGallery } from "./ImageGallery";
import { ItinerarySchedule } from "./ItinerarySchedule";
import type { HeaderTextType } from "./type";
import { WhatsIncluded } from "./WhatsIncluded";

const HeaderTexts = ({ tour }: HeaderTextType) => {
  return (
    <Container2>
      <TourTitle>{tour.name}</TourTitle>
      <InfoBox>
        <InfoRow>
          <InfoIcon>
            <EnvironmentOutlined />
          </InfoIcon>
          <InfoText>{tour.city}</InfoText>
        </InfoRow>
        <InfoRow>
          <InfoIcon>
            <DollarOutlined />
          </InfoIcon>
          <PriceText>{getPriceLabel(tour.price)}</PriceText>
        </InfoRow>
        <InfoRow>
          <InfoIcon>
            <ClockCircleOutlined />
          </InfoIcon>
          <InfoText>
            {tour.duration} {uiStrings.days}
          </InfoText>
        </InfoRow>
      </InfoBox>
    </Container2>
  );
};

const Description = () => {
  return (
    <>
      <DescriptionText>{uiStrings.tourDesc}</DescriptionText>
      <DescriptionText>{uiStrings.tourDesc}</DescriptionText>
      <DescriptionText>{uiStrings.tourDesc}</DescriptionText>
    </>
  );
};

export const TourDetails = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const { data: tour, isLoading, error } = useTourQueryById(tourId!);

  if (isLoading) return <Loader paddingTop="80px" />;
  if (error) return <ErrorContainer message={error.message} />;
  if (!tour) return null;

  return (
    <ContentWrapper>
      <Layout>
        <Wrapper>
          <Header>
            <HeaderTexts tour={tour} />
          </Header>
          <Spacer marginTop="80px" />
          <ImageGallery tour={tour} />
          <Spacer marginTop="40px" />
          <Description />
          <Padder>
            <WhatsIncluded />
            <ItinerarySchedule />
          </Padder>
          <Flex justify="center">
            <Link to={`/book/tour/${tourId}`}>
              <BookNowButton>{uiStrings.bookNow}</BookNowButton>
            </Link>
          </Flex>
        </Wrapper>
        <Spacer marginTop="80px" />
      </Layout>
    </ContentWrapper>
  );
};
