import { decorate, observable, runInAction, configure } from "mobx";
import StoryTemplate from "./../models/StoryTemplate";
import Api from "./../api";

configure({ enforceActions: `observed` });

class StoriesTemplateStore {
	templates = [];

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.api = new Api(`template`);
		this.getAllTemplates();
	}

	getAllTemplates = () => {
		this.api.getAllTemplates().then(d => d.forEach(this._addStoryTemplate));
	};

	_addStoryTemplate = values => {
		const storyTemplate = new StoryTemplate(values);
		storyTemplate.updateFromServer(values);
		runInAction(() => this.templates.push(storyTemplate));
	};
}

decorate(StoriesTemplateStore, {
	templates: observable
});

export default StoriesTemplateStore;
