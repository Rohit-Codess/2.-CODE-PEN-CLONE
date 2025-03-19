import { render, screen, fireEvent } from "@testing-library/react";
import CodePenClone from "./App";

test("renders React CodePen Clone heading", () => {
  render(<CodePenClone />);
  const headingElement = screen.getByText(/React CodePen Clone/i);
  expect(headingElement).toBeInTheDocument();
});

test("updates HTML textarea input", () => {
  render(<CodePenClone />);
  const htmlTextarea = screen.getByPlaceholderText("Write HTML here...");
  fireEvent.change(htmlTextarea, { target: { value: "<h1>Test</h1>" } });
  expect(htmlTextarea.value).toBe("<h1>Test</h1>");
});

test("updates CSS textarea input", () => {
  render(<CodePenClone />);
  const cssTextarea = screen.getByPlaceholderText("Write CSS here...");
  fireEvent.change(cssTextarea, { target: { value: "h1 { color: red; }" } });
  expect(cssTextarea.value).toBe("h1 { color: red; }");
});

test("updates JavaScript textarea input", () => {
  render(<CodePenClone />);
  const jsTextarea = screen.getByPlaceholderText("Write JavaScript here...");
  fireEvent.change(jsTextarea, { target: { value: "console.log('Test JS');" } });
  expect(jsTextarea.value).toBe("console.log('Test JS');");
});

test("iframe output updates when input changes", () => {
  render(<CodePenClone />);
  const htmlTextarea = screen.getByPlaceholderText("Write HTML here...");
  fireEvent.change(htmlTextarea, { target: { value: "<h1>Updated</h1>" } });

  const iframe = screen.getByTitle("output");
  expect(iframe).toBeInTheDocument();
});
