import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Story {
	constructor(_id = uuid.v4(), genre, author, title, synopsis, story) {
		this.id = _id;
		this.genre = genre;
		this.author = author;
		this.title = title;
		this.synopsis = synopsis;
		this.story = story;
		this.votes = 0;
	}

	setId = _id => (this.id = _id);
	setGenre = value => (this.genre = value);
	setAuthor = value => (this.author = value);
	setTitle = value => (this.title = value);
	setSynopsys = value => (this.synopsis = value);
	setStory = value => (this.story = value);
	setVotes = value => (this.votes = value);

	increment = () => {
		this.votes = this.votes + 1;
	};

	get values() {
		return {
			_id: this.id,
			genre: this.genre,
			author: this.author,
			title: this.title,
			synopsis: this.synopsis,
			story: this.story,
			votes: this.votes
		};
	}

	updateFromServer = values => {
		this.setId(values._id);
		this.setGenre(values.genre);
		this.setAuthor(values.author);
		this.setTitle(values.title);
		this.setSynopsys(values.synopsis);
		this.setStory(values.story);
		this.setVotes(values.votes);
	};
}

decorate(Story, {
	_id: observable,
	setId: action,
	values: computed,
	genre: observable,
	setGenre: action,
	author: observable,
	setAuthor: action,
	title: observable,
	setTitle: action,
	synopsis: observable,
	setSynopsys: action,
	story: observable,
	setStory: action,
	votes: observable,
	setVotes: action,
	increment: action
});

export default Story;
