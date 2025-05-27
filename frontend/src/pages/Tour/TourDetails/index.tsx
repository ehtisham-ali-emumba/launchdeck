import { Flex } from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { ContentWrapper, Header, Layout } from "../../../styles";
import { ImageGallery } from "./ImageGallery";
import { Spacer } from "../../../components/Spacer";
import { WhatsIncluded } from "./WhatsIncluded";
import { Link, useParams } from "react-router-dom";

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
import { useTourQueryById } from "../../../hooks/queries";
import { Loader } from "../../../components";
import ErrorContainer from "../../../components/ErrorContainer";
import { getPriceLabel } from "../../../utils/priceUtils";
import { ItinerarySchedule } from "./ItinerarySchedule";
import { uiStrings } from "../../../constants/uiStrings";
import type { HeaderTextType } from "./type";

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
