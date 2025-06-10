import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { Button } from "../Button";

function getButtonStyles(element: HTMLElement) {
  return window.getComputedStyle(element);
}

describe("Button", () => {
  it("matches snapshot", () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toMatchSnapshot();
  });
  it("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies the correct size class", () => {
    const { rerender } = render(<Button size="large">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("ant-btn");
    rerender(<Button size="small">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass("ant-btn");
  });

  it("applies correct styles for size prop", () => {
    const { rerender } = render(<Button size="large">Large</Button>);
    let btn = screen.getByRole("button");
    let styles = getButtonStyles(btn);
    console.log("🚀 ~ it ~ styles:", styles);
    expect(styles.height).toBe("56px");
    expect(styles.fontSize).toBe("18px");
    expect(styles.paddingLeft).toBe("32px");
    expect(styles.paddingRight).toBe("32px");

    rerender(<Button size="small">Small</Button>);
    btn = screen.getByRole("button");
    styles = getButtonStyles(btn);
    expect(styles.height).toBe("32px");
    expect(styles.fontSize).toBe("14px");
    expect(styles.paddingLeft).toBe("16px");
    expect(styles.paddingRight).toBe("16px");

    rerender(<Button>Medium</Button>);
    btn = screen.getByRole("button");
    styles = getButtonStyles(btn);
    expect(styles.height).toBe("48px");
    expect(styles.fontSize).toBe("16px");
    expect(styles.paddingLeft).toBe("24px");
    expect(styles.paddingRight).toBe("24px");
  });

  it("applies correct styles for variant prop", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    let btn = screen.getByRole("button");
    let styles = getButtonStyles(btn);
    expect(styles.backgroundColor).toBe("rgb(241, 107, 81)");
    expect(styles.color).toBe("rgb(255, 255, 255)");

    rerender(<Button variant="secondary">Secondary</Button>);
    btn = screen.getByRole("button");
    styles = getButtonStyles(btn);
    expect(styles.backgroundColor).toBe("rgba(0, 0, 0, 0)");
    expect(styles.color).toBe("rgb(51, 51, 51)");

    rerender(<Button variant="outlined">Outlined</Button>);
    btn = screen.getByRole("button");
    styles = getButtonStyles(btn);
    expect(styles.backgroundColor).toBe("rgba(0, 0, 0, 0)");
    expect(styles.color).toBe("rgb(247, 119, 74)");
    expect(styles.borderTopColor).toBe("rgb(247, 119, 74)");

    rerender(<Button variant="icon">Icon</Button>);
    btn = screen.getByRole("button");
    styles = getButtonStyles(btn);
    expect(styles.width).toBe("50px");
    expect(styles.height).toBe("50px");
    expect(styles.borderRadius).toBe("50%");
    expect(styles.color).toBe("rgb(241, 107, 81)");

    rerender(<Button variant="icon-transparent">Icon Transparent</Button>);
    btn = screen.getByRole("button");
    styles = getButtonStyles(btn);
    expect(styles.backgroundColor).toBe("rgba(0, 0, 0, 0)");
    expect(styles.color).toBe("rgb(241, 107, 81)");
  });
});
