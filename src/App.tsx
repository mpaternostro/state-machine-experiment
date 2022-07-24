import { FormEvent, useState } from "react";
import { classNames } from "./lib/classNames";

export default function App() {
	const [disqualifyState, setDisqualifyState] = useState<"idle" | "submitting">(
		"idle",
	);
	// here everything is mixed up, form submission and business logic belongs to the same function
	function handleDisqualify(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		setDisqualifyState("submitting");

		// fake business logic
		return new Promise((resolve) => {
			setTimeout(() => {
				setDisqualifyState("idle");
				console.log("disqualified");
				resolve("Success");
			}, 2000);
		});
	}

	const isDisqualifying = disqualifyState === "submitting";

	return (
		<main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:px-8">
			<div className="flex items-start space-x-5">
				<div className="flex-shrink-0">
					<div className="relative">
						<img
							className="h-16 w-16 rounded-full"
							src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
							alt=""
						/>
						<span
							className="absolute inset-0 shadow-inner rounded-full"
							aria-hidden="true"
						/>
					</div>
				</div>
				{/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
				<div className="pt-1.5">
					<h1 className="text-2xl font-bold text-gray-900">Ricardo Cooper</h1>
					<p className="text-sm font-medium text-gray-500">
						Applied for{" "}
						<a href="#" className="text-gray-900">
							Front End Developer
						</a>{" "}
						on <time dateTime="2020-08-25">August 25, 2020</time>
					</p>
				</div>
			</div>
			<div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
				<form onSubmit={handleDisqualify}>
					<button
						type="submit"
						className={classNames(
							"w-32 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
							isDisqualifying ? "opacity-50 cursor-not-allowed" : "",
						)}
						aria-disabled={isDisqualifying}
					>
						{isDisqualifying ? "Disqualifying..." : "Disqualify"}
						<span aria-live="assertive" className="sr-only">
							{isDisqualifying ? "Disqualifying, please wait..." : ""}
						</span>
					</button>
				</form>
			</div>
		</main>
	);
}
