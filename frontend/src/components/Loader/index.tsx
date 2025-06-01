import React from "react";

import { CenteredWrapper, OrangeSpin } from "./elements";
import type { LoaderProps } from "./type";

export const Loader: React.FC<LoaderProps> = ({ marginTop, paddingTop }) => (
  <CenteredWrapper marginTop={marginTop} paddingTop={paddingTop}>
    <OrangeSpin size="large" />
  </CenteredWrapper>
);
