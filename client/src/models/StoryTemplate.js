import uuid from "uuid";
import { decorate, observable } from "mobx";

class StoryTemplate {
	constructor(_id = uuid.v4(), genre, story) {
		this.id = _id;
		this.genre = genre;
		this.story = story;
	}
}
decorate(StoryTemplate, {
	_id: observable,
	genre: observable,
	story: observable
});
