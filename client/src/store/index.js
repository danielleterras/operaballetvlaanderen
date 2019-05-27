import { decorate, observable, action, runInAction } from "mobx";
import Story from "../models/Story";
import Api from "../api";

class Store {
	stories = [];

	constructor() {
		this.api = new Api(`stories`);
		this.api.getAll().then(d => d.forEach(this._addStory));
	}

	addStory = story => {
		const newStory = new Story(story.title);
		this.stories.push(newStory);
		this.api
			.create(newStory)
			.then(storyValues => newStory.updateFromServer(storyValues));
	};

	_addStory = ({ title, _id }) => {
		const story = new Story(title, _id);
		runInAction(() => this.stories.push(story));
	};
}

decorate(Store, {
	stories: observable,
	addStory: action
});

export default new Store();
