import StoriesStore from "./StoriesStore";

class RootStore {
	constructor() {
		console.log("dsgfdg");
		this.storiesStore = new StoriesStore(this);
		console.log("testretfd");
	}
}

export default new RootStore();
