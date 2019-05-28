import { decorate, observable, action, runInAction, configure } from "mobx";
import Story from "./../models/Story";
import Api from "./../api";

configure({ enforceActions: `observed` });

class StoriesStore {
	stories = [];

	constructor(rootStore) {
		this.rootStore = rootStore;

		this.api = new Api(`stories`);
		console.log("test after api");
		this.api.getAll().then(d => d.forEach(this._addStory));
		console.log("test  api");
	}

	addStory = ({ type, author, genre, story, title, synopsis }) => {
		const newStory = new Story(type, genre, author, title, synopsis, story);
		this.stories.push(newStory);
		this.api
			.create(newStory)
			.then(storyValues => newStory.updateFromServer(storyValues));
	};

	_addStory = values => {
		console.log("test  api");
		const story = new Story();
		story.updateFromServer(values);
		runInAction(() => this.stories.push(story));
	};
}

decorate(StoriesStore, {
	stories: observable,
	addStory: action
});

export default new StoriesStore();
