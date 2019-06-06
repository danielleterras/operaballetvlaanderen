import { decorate, observable, action, runInAction, configure } from "mobx";
import Story from "./../models/Story";
import Api from "./../api";

configure({ enforceActions: `observed` });

class StoriesStore {
  stories = [];
  liked = [];

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
    const like = this.liked.find(check => check.id === story.id);
    console.log(like);
    const vote = this.stories.find(check => check.id === story.id);
    vote.increment();
    runInAction(() => this.liked.push(story.id));
    console.log(this.liked);
    this.api
      .update(story)
      .then(storyValues => story.updateFromServer(storyValues));
    console.log(story);
  };
}

decorate(StoriesStore, {
  stories: observable,
  addStory: action,
  updateVotes: action,
  liked: observable
});

export default StoriesStore;
