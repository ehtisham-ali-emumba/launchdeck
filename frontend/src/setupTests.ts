import "@testing-library/jest-dom";
import React from "react";

import { vi } from "vitest";
// Mock all SVGs and assets globally for tests using the alias path
vi.mock("~/assets", () => ({
  PlaceholderSvg: () =>
    React.createElement("svg", { "data-testid": "placeholder-svg" }),
  LogoSvg: () => React.createElement("svg", { "data-testid": "logo-svg" }),
}));
