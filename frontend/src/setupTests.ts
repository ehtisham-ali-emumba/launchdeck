import "@testing-library/jest-dom";
import React from "react";

import { setupServer } from "msw/node";
import { vi } from "vitest";

import { debugHandler } from "./__mocks__/debugHandler";
import { handlers } from "./__mocks__/handlers";
// Mock all SVGs and assets globally for tests using the alias path
vi.mock("~/assets", () => ({
  PlaceholderSvg: () =>
    React.createElement("svg", { "data-testid": "placeholder-svg" }),
  LogoSvg: () => React.createElement("svg", { "data-testid": "logo-svg" }),
}));

const server = setupServer(debugHandler, ...handlers);

// Start server before all tests
beforeAll(() => server.listen());
// Reset handlers after each test
afterEach(() => server.resetHandlers());
// Clean up after all tests are done
afterAll(() => server.close());

// Optionally export server for custom handlers in specific tests
export { server };
