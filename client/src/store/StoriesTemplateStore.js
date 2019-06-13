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
    const storyTemplate = new StoryTemplate(values);
    storyTemplate.updateFromServer(values);
    runInAction(() => this.templates.push(storyTemplate));
  };
}

decorate(StoriesTemplateStore, {
  templates: observable,
  addStoryTemplate: action
});

export default StoriesTemplateStore;
