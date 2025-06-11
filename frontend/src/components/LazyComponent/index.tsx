import { Suspense } from "react";

import { Spin } from "antd";

import { LoadingWrapper } from "./elements";
import type { LazyComponentProps } from "./type";

const LoadingSuspense = () => {
  return (
    <LoadingWrapper>
      <Spin size="large" data-testid="lazy-loading-spinner" />
    </LoadingWrapper>
  );
};

export const LazyComponent = ({ children }: LazyComponentProps) => {
  return <Suspense fallback={<LoadingSuspense />}>{children}</Suspense>;
};
