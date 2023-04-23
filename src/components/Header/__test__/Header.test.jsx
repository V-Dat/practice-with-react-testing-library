import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Checking Header render props title", () => {
  test("Title must be Todos", () => {
    render(<Header title="Todos" />);
    const headingElement = screen.getByText(/Todos/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("Title must be  Example", () => {
    render(<Header title="Example" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.textContent).toBe("Example");
  });

  test("Title must be abc", () => {
    render(<Header title="abc" />);
    const headingElement = screen.getByText("abc");
    expect(headingElement).toBeInTheDocument();
  });
});

/**
 * phương thức toEqual dùng để so sánh ==
 * phương thức toBe dùng để so sánh ===
 *
 * Role query suppport see more at : 5.2.7.5 Roles Supporting Name from Content
 * https://www.w3.org/TR/wai-aria/#namefromcontent
 * https://www.w3.org/TR/html-aria/#docconformance
 *
 * Trong trường hợp không tìm thấy role phù hợp trong tài liệu chính thức
 * bạn có thể xem xét sử dụng thuộc tính data-testid để đánh dấu các phần tử trên UI
 * và tìm kiếm chúng bằng getByTestId hoặc findByTestId của React Testing Library.
 */
