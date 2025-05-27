import React from "react";
import type { LoaderProps } from "./type";
import { CenteredWrapper, OrangeSpin } from "./elements";

export const Loader: React.FC<LoaderProps> = ({ marginTop, paddingTop }) => (
  <CenteredWrapper marginTop={marginTop} paddingTop={paddingTop}>
    <OrangeSpin size="large" />
  </CenteredWrapper>
);
