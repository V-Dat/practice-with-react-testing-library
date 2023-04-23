import { screen, render, fireEvent } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

function WrapperTodoFooter({ numberOfIncompleteTasks }) {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
}

describe("Checking TodoFooter render props numberOfIncompleteTasks", () => {
  test("should be render 1", () => {
    render(<WrapperTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElemet = screen.getByText("1 task left");
    expect(paragraphElemet).toBeInTheDocument();
  });
  test("should be render 5", () => {
    render(<WrapperTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElemet = screen.getByText("5 tasks left");
    expect(paragraphElemet).toBeInTheDocument();
  });
});

/**
 * Trong trường hợp này TodoFooter có Render 1 Component Link
 * Khi thực hiện Unit test - React chỉ test trên Component TodoFooter
 * Vậy nên Link cần được wrapper inside BrowserRouter Component
 * ----
 * WrapperTodoFooter là component chúng ta thực hiện test
 * ----
 */
