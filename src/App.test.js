import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { Text } = render(<App />);
  const linkElement = Text(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
