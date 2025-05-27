import { PlaceholderSvg } from "../../assets";
import { uiStrings } from "../../constants";
import { BlankSlateTitle, BlankSlateWrapper } from "./elements";
import type { BlankSlateType } from "./type";

export const BlankSlate: React.FC<BlankSlateType> = ({
  message = uiStrings.noDataFound,
}) => {
  return (
    <BlankSlateWrapper>
      <PlaceholderSvg />
      <BlankSlateTitle>{message}</BlankSlateTitle>
    </BlankSlateWrapper>
  );
};
