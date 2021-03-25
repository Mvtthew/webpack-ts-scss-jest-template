// jest.config.js
const { defaults } = require("jest-config");
module.exports = {
	// ...
	moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
	transform: {},
	preset: "ts-jest",
	testEnvironment: "node",
	transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
	// ...
};
