import { render, screen } from "@testing-library/react";

import { Loader } from "../Loader";

describe("Loader", () => {
  it("renders the spinner inside a centered wrapper", () => {
    render(<Loader marginTop={"10px"} paddingTop={"20px"} />);
    const spinner = screen.getByTestId("loader-spin");
    expect(spinner).toBeInTheDocument();
    expect(spinner.parentElement).toHaveStyle({
      marginTop: "10px",
      paddingTop: "20px",
      alignItems: "flex-start",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    });
  });

  it("matches snapshot", () => {
    const { container } = render(<Loader />);
    expect(container).toMatchSnapshot();
  });
});
