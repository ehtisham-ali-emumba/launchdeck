import { MemoryRouter } from "react-router-dom";

import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import { QueryProvider } from "~/providers/ReactQueryProvider";

import { Home } from "../Home";

describe("Home page integration", () => {
  const renderWithProviders = (ui: React.ReactElement) =>
    render(
      <MemoryRouter>
        <QueryProvider>{ui}</QueryProvider>
      </MemoryRouter>
    );

  it("renders all ProductList sections and WelcomeBanner", async () => {
    renderWithProviders(<Home />);

    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByTestId("loader-spin")).not.toBeInTheDocument();
    });

    // Check WelcomeBanner
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getAllByText(/today/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/last week/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/last month/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/next month/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/next week/i).length).toBeGreaterThan(0);
  });

  it("renders correct number of Spacer components", async () => {
    renderWithProviders(<Home />);

    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByTestId("loader-spin")).not.toBeInTheDocument();
    });

    const spacers = screen.getAllByTestId("spacer");
    expect(spacers.length).toBe(5);
  });

  it("renders at least one product in the ProductList", async () => {
    renderWithProviders(<Home />);

    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByTestId("loader-spin")).not.toBeInTheDocument();
    });

    // Check for product name
    const launchPadProText = screen.getAllByText("LaunchPad Pro");
    expect(launchPadProText.length).toBe(5);

    const anAIPowered = screen.getAllByText(
      "An AI-powered product launch platform"
    );
    expect(anAIPowered.length).toBe(5);
    const aiText = screen.getAllByText("AI");
    expect(aiText.length).toBe(5);

    const marketingText = screen.getAllByText("Marketing");
    expect(marketingText.length).toBe(5);

    const productLaunchText = screen.getAllByText("Product Launch");
    expect(productLaunchText.length).toBe(5);
  });

  it("should show welcome banner initially and hide it when close button is clicked", async () => {
    renderWithProviders(<Home />);

    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByTestId("loader-spin")).not.toBeInTheDocument();
    });

    // Check welcome banner is initially visible
    expect(screen.getByText("Welcome to Launch Deck!")).toBeInTheDocument();

    // Find close button using the test ID
    const closeButton = screen.getByTestId("welcome-banner-close");

    // Click close button
    fireEvent.click(closeButton);

    // Check welcome banner is now hidden
    expect(
      screen.queryByText("Welcome to Launch Deck!")
    ).not.toBeInTheDocument();

    // Check close button is also no longer in the document
    expect(closeButton).not.toBeInTheDocument();
  });
});
