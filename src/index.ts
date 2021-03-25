import Package from "./package";

import "./styles.scss";

class App {
	allFine: boolean = true;
	allIsFine: boolean = true;

	constructor() {}

	private init() {
		console.log(new Package().element);
		console.log("START");
	}
}
const app = new App();
export default app;
