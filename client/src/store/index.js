import StoriesStore from "./StoriesStore";
import StoriesTemplateStore from "./StoriesTemplateStore";

class RootStore {
	constructor() {
		this.storiesStore = new StoriesStore(this);
		this.storiesTemplateStore = new StoriesTemplateStore(this);
	}
}

export default new RootStore();
