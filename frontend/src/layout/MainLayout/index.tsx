import React from "react";
import { Header } from "./Header";
import { RelativeDiv } from "./elements";
import type { MainLayoutProps } from "./type";
import { Footer } from "./Footer";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <RelativeDiv>
      <Header />
      <main>{children}</main>
      <Footer />
    </RelativeDiv>
  );
};
