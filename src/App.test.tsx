import { render, screen } from "./utils/test-utils";
import { describe, expect, test } from "vitest";
import App from "./App";

describe("App", () => {
	test("matches snapshot", () => {
		render(<App />);
		expect(screen.getByRole("main")).toMatchSnapshot();
	});
});
