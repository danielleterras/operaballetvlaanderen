import { decorate, observable, action, runInAction, configure } from "mobx";
import Story from "./../models/Story";
import Api from "./../api";

configure({ enforceActions: `observed` });

class Store {
	stories = [];

	constructor() {
		this.api = new Api(`stories`);
		this.api.getAll().then(d => d.forEach(this._addStory));
	}

	addStory = ({ type, author, genre, story, title, synopsis }) => {
		const newStory = new Story(type, genre, author, title, synopsis, story);
		console.log(newStory);
		this.stories.push(newStory);
		this.api
			.create(newStory)
			.then(storyValues => newStory.updateFromServer(storyValues));
	};

	_addStory = values => {
		// console.log(values);
		const story = new Story();
		story.updateFromServer(values);
		runInAction(() => this.stories.push(story));
	};
}

decorate(Store, {
	stories: observable,
	addStory: action
});

export default new Store();
