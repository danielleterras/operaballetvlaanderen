import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Story {
	constructor(title, id = uuid.v4()) {
		this.id = id;
		this.title = title;
	}

	setId = id => (this.id = id);
	setTitle = value => (this.title = value);

	get values() {
		return { title: this.title };
	}

	updateFromServer = values => {
		this.setId(values._id);
		this.setTitle(values.title);
	};
}

decorate(Story, {
	id: observable,
	setId: action,
	values: computed,
	title: observable,
	setTitle: action
});

export default Story;
