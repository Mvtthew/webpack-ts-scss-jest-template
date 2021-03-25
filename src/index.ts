import Package from "./package";

import "./styles.scss";

class App {
	allFine: boolean = true;

	constructor() {}

	private init() {
		console.log(new Package().element);
	}
}
const app = new App();
export default app;
