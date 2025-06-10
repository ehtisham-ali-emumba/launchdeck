import { render, screen } from "@testing-library/react";

import { uiStrings } from "../../constants";

import { BlankSlate } from ".";

describe("BlankSlate", () => {
  it("renders with the default message", () => {
    render(<BlankSlate />);
    expect(screen.getByText(uiStrings.noDataFound)).toBeInTheDocument();
    expect(screen.getByTestId("placeholder-svg")).toBeInTheDocument();
  });

  it("renders with a custom message", () => {
    render(<BlankSlate message="Custom message" />);
    expect(screen.getByText("Custom message")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<BlankSlate />);
    expect(container).toMatchSnapshot();
  });
});
