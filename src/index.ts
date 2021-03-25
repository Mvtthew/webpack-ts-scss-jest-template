import Package from "./package";

import "./styles.scss";

class App {
	allFine: boolean = true;

	constructor() {
		console.log(new Package().element);
	}
}
const app = new App();
export default app;
