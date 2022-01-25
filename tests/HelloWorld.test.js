import { render, screen } from "@testing-library/react";
import HelloWorld from "../../components/HelloWorld";

describe("HelloWorld", () => {
  it("should render Hello, World", () => {
    render(<HelloWorld />);
    expect(screen.getByText(/Hello, World!/)).toBeInTheDocument();
  });
});
