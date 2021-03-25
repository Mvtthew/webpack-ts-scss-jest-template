// jest.config.js
const { defaults } = require("jest-config");
module.exports = {
	// ...
	moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
	moduleNameMapper: {
		"\\.(css|scss)$": "sass-loader",
	},
	transform: {},
	preset: "ts-jest",
	testEnvironment: "node",
	transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
	collectCoverage: true,
	coverageDirectory: "docs/",
	coverageReporters: ["html"],
	// ...
};
