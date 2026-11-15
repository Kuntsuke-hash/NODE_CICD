import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MainContent from "./MainContent";

describe("MainContent", () => {
  it("should render a button", () => {
    render(<MainContent />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  //this test is to check if the help area is displayed after clicking the button. It uses the render function from @testing-library/react to render the MainContent component, then simulates a click event on the button using userEvent.click. Finally, it checks if the help area is present in the document using getByTestId.
  it("should show the help area after clicking the button", async () => {
    render(<MainContent />);

    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(screen.getByTestId("help-area")).toBeInTheDocument();
  });
});
