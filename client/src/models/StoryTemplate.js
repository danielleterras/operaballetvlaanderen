import uuid from "uuid";
import { decorate, observable, action } from "mobx";

class StoryTemplate {
	constructor(_id = uuid.v4(), genre, story) {
		this.id = _id;
		this.genre = genre;
		this.story = story;
	}

	setId = _id => (this.id = _id);
	setGenre = value => (this.genre = value);
	setStory = value => (this.story = value);

	get values() {
		return {
			_id: this.id,
			genre: this.genre,
			story: this.story
		};
	}
	updateFromServer = values => {
		this.setId(values._id);
		this.setGenre(values.genre);
		this.setStory(values.story);
	};
}
decorate(StoryTemplate, {
	_id: observable,
	setId: action,
	genre: observable,
	setGenre: action,
	story: observable,
	setStory: action
});

export default StoryTemplate;
