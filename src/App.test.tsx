import { render, screen } from "./utils/test-utils";
import { describe, expect, test, vi } from "vitest";
import App from "./App";

describe("App", () => {
	test("matches snapshot on any day that is not sunday", () => {
		vi.useFakeTimers({
			// fake the current date to be saturday
			now: new Date(2022, 7, 6),
		});
		render(<App />);
		expect(screen.getByRole("main")).toMatchSnapshot();
		vi.useRealTimers();
	});

	test("matches snapshot on sunday", () => {
		vi.useFakeTimers({
			// fake the current date to be sunday
			now: new Date(2022, 7, 7),
		});
		render(<App />);
		expect(screen.getByRole("main")).toMatchSnapshot();
		vi.useRealTimers();
	});
});
