import { screen, render } from "@testing-library/react";

import Title from "./Title";

describe("Title component", () => {

    it("Should show text as title", () => {

        const title = "Ticketing team is the best team";

        render(<Title title={title} />);

        //Find the error
        expect(screen.getByText("Ticketing team is the best team ")).toHaveTextContent(title);
    });

    it("Should not render with the prop title", () => {

        render(<Title />);

        // Add the assert
    })
})