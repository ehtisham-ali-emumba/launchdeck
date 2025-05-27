import { Typography } from "antd";
import { uiStrings } from "../../../constants/uiStrings";
import { itineraryData } from "./utils";
import {
  ItinearyContainer,
  ScrollContainer,
  StyledCard,
  CardHeader,
  TextDay,
  WeatherInfo,
  TextWeather,
  TextDetail,
} from "./elements";

const { Title } = Typography;

export const ItinerarySchedule = () => {
  return (
    <ItinearyContainer>
      <Title level={2}>{uiStrings.itinerary}</Title>
      <ScrollContainer>
        {itineraryData.map((item, index) => (
          <StyledCard key={index}>
            <CardHeader>
              <TextDay>{item.day}</TextDay>
              <WeatherInfo>
                {item.weatherIcon}
                <TextWeather>{item.temperature}</TextWeather>
              </WeatherInfo>
            </CardHeader>
            <ul>
              {item.activities.map((activity, key) => (
                <li key={key}>
                  <TextDetail>{activity}</TextDetail>
                </li>
              ))}
            </ul>
          </StyledCard>
        ))}
      </ScrollContainer>
    </ItinearyContainer>
  );
};
