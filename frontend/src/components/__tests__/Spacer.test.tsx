import { render } from "@testing-library/react";

import { Spacer, InlineSpacer } from "../Spacer";

describe("Spacer", () => {
  it("applies margin and padding props correctly", () => {
    const { container } = render(
      <Spacer
        marginTop="10px"
        marginBottom="5px"
        paddingLeft="8px"
        paddingRight="12px"
      />
    );
    const spacer = container.firstChild;
    expect(spacer).toHaveStyle({
      marginTop: "10px",
      marginBottom: "5px",
      paddingLeft: "8px",
      paddingRight: "12px",
    });
  });

  it("applies top prop as height", () => {
    const { container } = render(<Spacer top="20px" />);
    const spacer = container.firstChild;
    expect(spacer).toHaveStyle({ height: "20px" });
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Spacer marginTop="1rem" paddingBottom="2rem" />
    );
    expect(container).toMatchSnapshot();
  });
});

describe("InlineSpacer", () => {
  it("applies margin and padding props correctly", () => {
    const { container } = render(
      <InlineSpacer
        marginLeft="4px"
        marginRight="6px"
        paddingTop="3px"
        paddingBottom="7px"
      />
    );
    const spacer = container.firstChild;
    expect(spacer).toHaveStyle({
      marginLeft: "4px",
      marginRight: "6px",
      paddingTop: "3px",
      paddingBottom: "7px",
    });
  });

  it("applies top prop as height", () => {
    const { container } = render(<InlineSpacer top="15px" />);
    const spacer = container.firstChild;
    expect(spacer).toHaveStyle({ height: "15px" });
  });

  it("matches snapshot", () => {
    const { container } = render(
      <InlineSpacer marginLeft="2rem" paddingRight="1rem" />
    );
    expect(container).toMatchSnapshot();
  });
});
