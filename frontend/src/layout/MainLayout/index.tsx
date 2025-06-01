import React from "react";

import { Spacer } from "~/components";

import { RelativeDiv } from "./elements";
import { Footer } from "./Footer";
import { Header } from "./Header";
import type { MainLayoutProps } from "./type";


export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showFooter,
}) => {
  return (
    <RelativeDiv>
      <Header />
      <Spacer top="85px" />
      <main>{children}</main>
      {showFooter && <Footer />}
    </RelativeDiv>
  );
};
