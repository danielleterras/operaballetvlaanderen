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

	addStory = async data => {
		const newStory = new Story(
			data.genre,
			data.author,
			data.title,
			data.story,
			data.synopsys
		);
		newStory.updateFromServer(data);
		this.stories.push(newStory);
		const storyValues = await this.api.create(newStory);
		newStory.updateFromServer(storyValues);

		return newStory;
	};

	_addStory = values => {
		const story = new Story();
		story.updateFromServer(values);
		runInAction(() => this.stories.push(story));
	};

	updateVotes = story => {
		const vote = this.stories.find(check => check.id === story.id);
		if (story.voted === true) {
			vote.decrement();
		} else {
			vote.increment();
		}
		vote.changeValue();
		this.api
			.update(story)
			.then(storyValues => story.updateFromServer(storyValues));
	};

	getById = id => {
		this.api.getById(id).then(d => console.log(d));
		const story = this.stories.find(check => check.id === id);
		return story;
	};
}

decorate(StoriesStore, {
	stories: observable,
	addStory: action,
	updateVotes: action,
	getById: action
});

export default StoriesStore;
