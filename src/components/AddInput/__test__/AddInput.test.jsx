import { screen, render, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodos = jest.fn();
describe("Checking AddInput Component", () => {
  test("should input and button", () => {
    render(<AddInput setTodos={mockSetTodos} todos={[]} />);
    const btnElement = screen.getByRole("button");
    const inputElement = screen.getByTestId("input");
    expect(inputElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
  });

  test("fireEvent onChange input", () => {
    render(<AddInput setTodos={mockSetTodos} todos={[]} />);
    const inputElement = screen.getByTestId("input");
    fireEvent.change(inputElement, { target: { value: "Go to shopping" } });
    expect(inputElement.value).toEqual("Go to shopping");
  });

  describe("fireEvent when click button add", () => {
    test("should cleanup input after click", () => {
      render(<AddInput setTodos={mockSetTodos} todos={[]} />);
      const inputElement = screen.getByTestId("input");
      const btnElement = screen.getByRole("button");
      fireEvent.change(inputElement, { target: { value: "Go to shopping" } });
      fireEvent.click(btnElement);
      expect(inputElement.value).toEqual("");
    });

    test("Should not add a new task when input is empty", () => {
      const setTodos = jest.fn();
      const { getByTestId, getByText } = render(<AddInput setTodos={setTodos} todos={[]} />);
      const input = getByTestId("input");
      fireEvent.change(input, { target: { value: "" } });
      fireEvent.click(getByText(/add/i));
      expect(setTodos).not.toHaveBeenCalled();
    });

    test("Should add a new task when input has value", () => {
      const setTodos = jest.fn();
      const propTodos = [
        {
          id: "1",
          task: "old task",
          completed: false,
        },
      ];
      const { getByTestId, getByText } = render(<AddInput setTodos={setTodos} todos={propTodos} />);
      const input = getByTestId("input");
      fireEvent.change(input, { target: { value: "New task" } });
      fireEvent.click(getByText(/add/i));
      expect(setTodos).toHaveBeenCalledWith([
        ...propTodos,
        {
          id: expect.any(String),
          task: "New task",
          completed: false,
        },
      ]);
    });
  });
});
