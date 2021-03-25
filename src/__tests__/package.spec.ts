import Package from "../package";

describe("Package.ts", () => {
	test("should return element name", () => {
		const p = new Package();
		expect(p.element).toContain("h1");
	});
});
