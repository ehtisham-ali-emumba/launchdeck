import { MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { Card } from "../Card";
import { cardDimensions } from "../Card/utils";

const defaultProps = {
  imageSrc: "test-image.jpg",
  url: "/test-url",
  imageHeight: 200,
  dimensions: cardDimensions,
};

describe("Card", () => {
  const renderWithRouter = (ui: React.ReactElement) =>
    render(<MemoryRouter>{ui}</MemoryRouter>);

  it("matches snapshot", () => {
    const { container } = renderWithRouter(<Card {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders image and navigates to url", () => {
    renderWithRouter(<Card {...defaultProps} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", defaultProps.imageSrc);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", defaultProps.url);
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    renderWithRouter(<Card {...defaultProps} onClick={handleClick} />);
    const link = screen.getByRole("link");
    await user.click(link);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders custom content and footer", () => {
    renderWithRouter(
      <Card
        {...defaultProps}
        renderContent={() => <div>Card Content</div>}
        renderLowerLeft={() => <span>Left</span>}
        renderLowerRight={() => <span>Right</span>}
        renderUpperLeft={() => <span>ULeft</span>}
        renderUpperRight={() => <span>URight</span>}
      />
    );
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(screen.getByText("Left")).toBeInTheDocument();
    expect(screen.getByText("Right")).toBeInTheDocument();
    expect(screen.getByText("ULeft")).toBeInTheDocument();
    expect(screen.getByText("URight")).toBeInTheDocument();
  });

  it("applies correct dimensions to the card", () => {
    renderWithRouter(<Card {...defaultProps} />);
    const card = screen.getByRole("img").closest(".ant-card");
    expect(card).toHaveStyle(`width: ${defaultProps.dimensions.width}px`);
    expect(card).toHaveStyle(`height: ${defaultProps.dimensions.height}px`);
  });
});
