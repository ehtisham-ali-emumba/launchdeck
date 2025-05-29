import React from "react";
import { Header } from "./Header";
import { RelativeDiv } from "./elements";
import type { MainLayoutProps } from "./type";
import { Footer } from "./Footer";
import { Spacer } from "~/components";

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
