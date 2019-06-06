import { decorate, observable, action, runInAction, configure } from "mobx";
import Story from "./../models/Story";
import Api from "./../api";

configure({ enforceActions: `observed` });

class StoriesStore {
  stories = [];

  constructor(rootStore) {
    this.rootStore = rootStore;

    this.api = new Api(`stories`);
    this.api.getAll().then(d => d.forEach(this._addStory));
  }

  addStory = data => {
    const newStory = new Story(data);
    newStory.updateFromServer(data);
    this.stories.push(newStory);
    this.api
      .create(newStory)
      .then(storyValues => newStory.updateFromServer(storyValues));
  };

  _addStory = values => {
    console.log(values);
    const story = new Story();
    story.updateFromServer(values);
    runInAction(() => this.stories.push(story));
  };

  updateVotes = story => {
    const vote = this.stories.find(check => check.id === story.id);
    vote.increment();
    console.log(vote);
    this.api
      .update(story)
      .then(storyValues => story.updateFromServer(storyValues));
    console.log(story);
  };
}

decorate(StoriesStore, {
  stories: observable,
  addStory: action
});

export default StoriesStore;
