import HomePage from "@/app/page";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Basic page test", () => {
  render(<HomePage />);
  expect(screen.getByText("HomePage")).toBeDefined();
});
