import { decorate, observable, action, runInAction, configure } from "mobx";
import Story from "./../models/Story";
import Api from "./../api";

configure({ enforceActions: `observed` });

class StoriesStore {
	stories = [];
	liked = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api(`stories`);
		this.api.getAll().then(d => d.forEach(this._addStory));
	}

	addStory = data => {
		console.log(data.story);
		const newStory = new Story(
			data.genre,
			data.author,
			data.title,
			data.synopsis,
			data.story
		);
		newStory.updateFromServer(data);
		this.stories.push(newStory);
		console.log(newStory);
		this.api
			.create(newStory)
			.then(storyValues => newStory.updateFromServer(storyValues));
	};

	_addStory = values => {
		const story = new Story();
		story.updateFromServer(values);
		runInAction(() => this.stories.push(story));
	};

	updateVotes = story => {
		console.log(story);
		const like = this.liked.find(check => check === story.id);
		if (like) {
			console.log("already voted");
		} else {
			const vote = this.stories.find(check => check.id === story.id);
			vote.increment();
			runInAction(() => this.liked.push(story.id));
			this.api
				.update(story)
				.then(storyValues => story.updateFromServer(storyValues));
		}
	};
}

decorate(StoriesStore, {
	stories: observable,
	liked: observable,
	addStory: action,
	updateVotes: action
});

export default StoriesStore;
