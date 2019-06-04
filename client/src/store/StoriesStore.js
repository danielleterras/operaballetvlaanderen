import { decorate, observable, action, runInAction, configure } from "mobx";
import Story from "./../models/Story";
import Api from "./../api";

configure({ enforceActions: `observed` });

class StoriesStore {
	stories = [];

	constructor(rootStore) {
		this.rootStore = rootStore;

		this.api = new Api(`stories`);
		this.api.getAll().then(d => d.forEach(this._addStory));
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

	vote = story => {
		console.log(story.id);
		const vote = this.stories.find(check => check.id === story.id);
		console.log(vote);
		//vote.increment();
	};
}

decorate(StoriesStore, {
	stories: observable,
	addStory: action
});

export default StoriesStore;
