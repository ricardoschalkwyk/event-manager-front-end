import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Root from "./Root";
import SignInChoice from "./pages/sign-in-sign-up/SignInChoice";

describe("App tests", () => {
  it("should render Root", () => {
    render(<Root />);
  });

  it("Root renders a App id applied to <App />", () => {
    const { queryByTestId } = render(<Root />);
    expect(queryByTestId("App")).toBeDefined();
  });

  it("should render SignInChoice", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in-choice" element={<SignInChoice />} />
        </Routes>
      </BrowserRouter>
    );
  });

  it("Should find id inside SignInChoice", () => {
    expect(screen.queryByTestId("Test-Link")).toBeDefined();
  });

  it("Matches Snapshot", () => {
    const result = render(<Root />);
    expect(result).toMatchSnapshot();
  });
});
