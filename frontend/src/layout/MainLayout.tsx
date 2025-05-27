import React from "react";
import { Header } from "../components";
import { RelativeDiv } from "./elements";
import type { MainLayoutProps } from "./type";

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hideExplore,
}) => {
  return (
    <RelativeDiv>
      <Header hideExplore={hideExplore} />
      <main>{children}</main>
    </RelativeDiv>
  );
};
