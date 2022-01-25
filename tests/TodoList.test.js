import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../../components/TodoList";

describe("TodoList", () => {
  it("should render expected components", () => {
    render(<TodoList />);
    expect(
      screen.getByRole("heading", { name: /Todo List/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /Your todo/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add/ })
    ).toBeInTheDocument();
  });

  it("renders disabled button when todo value is empty", () => {
    render(<TodoList />);
    expect(
      screen.getByRole("button", { name: /Add/ })
    ).toBeDisabled();
  });

  it("displays todos upon submit", () => {
    // ARRANGE
    const todos = [
      "Learn react-testing-library",
      "Do a presentation about it",
    ];
    render(<TodoList />);
    const input = screen.getByRole("textbox", {
      name: /Your todo/,
    });
    const addButton = screen.getByRole("button", {
      name: /Add/,
    });
    // ACT
    // add two todos
    userEvent.type(input, todos[0]);
    userEvent.click(addButton);
    userEvent.type(input, todos[1]);
    userEvent.click(addButton);
    // now find all list items
    const listItems = screen.getAllByRole("listitem");
    // ASSERT
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveTextContent(todos[0]);
    expect(listItems[1]).toHaveTextContent(todos[1]);
  });
});
