import { decorate, observable, action, runInAction, configure } from "mobx";
import StoryTemplate from "./../models/StoryTemplate";
import Api from "./../api";

configure({ enforceActions: `observed` });

class StoriesTemplateStore {
	templates = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api(`test`);
		console.log(this.api);
		this.api.getAllTemplates().then(
			d => console.log(d)
			// d.forEach(this._addStoryTemplate)
		);
	}

	// addStory = data => {
	// 	console.log(data.story);
	// 	const newStory = new Story(
	// 		data.genre,
	// 		data.author,
	// 		data.title,
	// 		data.story,
	// 		data.synopsys
	// 	);
	// 	newStory.updateFromServer(data);
	// 	this.stories.push(newStory);
	// 	console.log(newStory);
	// 	this.api
	// 		.create(newStory)
	// 		.then(storyValues => newStory.updateFromServer(storyValues));
	// };

	_addStoryTemplate = values => {
		console.log(values);
		// const story = new Story();
		// story.updateFromServer(values);
		// runInAction(() => this.stories.push(story));
	};

	// getById = id => {
	// 	this.api.getById(id).then(d => console.log(d));
	// 	// this.stories.forEach(check => console.log(check.id));
	// 	const story = this.stories.find(check => check.id === id);
	// 	return story;
	// 	// console.log(story);
	// };
}

decorate(StoriesTemplateStore, {
	templates: observable
});

export default StoriesTemplateStore;
