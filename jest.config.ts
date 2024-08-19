export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.{ts,tsx,js,jsx}",
		"!src/**/*.d.ts", // Exclude type definition files
		"!src/setupTests.ts",
	],
	coverageReporters: ["json", "html", "text"],
};
