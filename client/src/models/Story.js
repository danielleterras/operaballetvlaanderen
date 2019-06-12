import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Story {
	constructor(
		_id = uuid.v4(),
		genre,
		author,
		title,
		story,
		synopsys,
		personage
	) {
		this.id = _id;
		this.genre = genre;
		this.author = author;
		this.title = title;
		this.story = story;
		this.synopsys = synopsys;
		this.votes = 0;
		this.voted = false;
		this.personage = personage;
	}

	setId = _id => (this.id = _id);
	setGenre = value => (this.genre = value);
	setAuthor = value => (this.author = value);
	setTitle = value => (this.title = value);
	setStory = value => (this.story = value);
	setSynopsys = value => (this.synopsys = value);
	setVotes = value => (this.votes = value);
	setVoted = value => (this.voted = value);
	setPersonage = value => (this.personage = value);

	increment = () => {
		this.votes = this.votes + 1;
	};

	decrement = () => {
		this.votes = this.votes - 1;
	};
	changeValue = () => {
		this.voted = !this.voted;
	};

	get values() {
		return {
			_id: this.id,
			genre: this.genre,
			author: this.author,
			title: this.title,
			story: this.story,
			synopsys: this.synopsys,
			votes: this.votes,
			personage: this.personage
		};
	}

	updateFromServer = values => {
		this.setId(values._id);
		this.setGenre(values.genre);
		this.setAuthor(values.author);
		this.setTitle(values.title);
		this.setStory(values.story);
		this.setSynopsys(values.synopsys);
		this.setVotes(values.votes);
		this.setVoted(this.voted);
		this.setPersonage(values.personage);
	};
}

decorate(Story, {
	_id: observable,
	setId: action,
	values: computed,
	genre: observable,
	setGenre: action,
	author: observable,
	voted: observable,
	setVoted: action,
	setAuthor: action,
	title: observable,
	setTitle: action,
	story: observable,
	setStory: action,
	synopsys: observable,
	setSynopsys: action,
	votes: observable,
	setVotes: action,
	personage: observable,
	setPersonage: action,
	increment: action,
	decrement: action
});

export default Story;
