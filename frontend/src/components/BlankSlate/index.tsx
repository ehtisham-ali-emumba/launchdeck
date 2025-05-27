import { PlaceholderSvg } from "../../assets";
import { uiStrings } from "../../constants";
import { BlankSlateTitle, BlankSlateWrapper } from "./elements";
import type { BlankSlateType } from "./type";

export const BlankSlate: React.FC<BlankSlateType> = ({
  message = uiStrings.noToursMessage,
}) => {
  return (
    <BlankSlateWrapper>
      <PlaceholderSvg />
      <BlankSlateTitle>{message}</BlankSlateTitle>
    </BlankSlateWrapper>
  );
};
