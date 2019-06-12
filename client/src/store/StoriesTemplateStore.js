import { decorate, observable, action, runInAction, configure } from "mobx";
import StoryTemplate from "./../models/StoryTemplate";
import Api from "./../api";

configure({ enforceActions: `observed` });

class StoriesTemplateStore {
  templates = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`template`);
    this.getAllTemplates();
    //this.api.getAllTemplates().then(d => d.forEach(this._addStoryTemplate));
  }

  getAllTemplates = () => {
    this.api.getAllTemplates().then(d => d.forEach(this._addStoryTemplate));
  };

  addStory = data => {
    const newStory = new StoryTemplate();
    newStory.updateFromServer(data);
    this.stories.push(newStory);
    this.api
      .create(newStory)
      .then(storyValues => newStory.updateFromServer(storyValues));
  };

  _addStoryTemplate = values => {
    console.log(values);
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
  templates: observable,
  addStoryTemplate: action
});

export default StoriesTemplateStore;
