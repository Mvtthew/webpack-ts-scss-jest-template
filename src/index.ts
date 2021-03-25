import Package from "./package";

import "./styles.scss";

class App {
	constructor() {
		const elementName = new Package().element;
		document.querySelector(elementName)!.innerHTML = "123";
	}
}
const app = new App();
export default app;
