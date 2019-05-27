import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Story {
  constructor(id = uuid.v4(), type, genre, author, title, synopsys, story) {
    this.id = id;
    this.type = type;
    this.genre = genre;
    this.author = author;

    this.title = title;
    this.synopsys = synopsys;
    this.story = story;
  }

  setId = id => (this.id = id);
  setType = value => (this.type = value);
  setGenre = value => (this.genre = value);
  setAuthor = value => (this.author = value);
  setTitle = value => (this.title = value);
  setSynopsys = value => (this.synopsys = value);
  setStory = value => (this.story = value);

  get values() {
    return {
      type: this.type,
      genre: this.genre,
      author: this.author,
      title: this.title,
      synopsys: this.synopsys,
      story: this.story
    };
  }

  updateFromServer = values => {
    this.setId(values._id);
    this.setType(values.type);
    this.setGenre(values.genre);
    this.setAuthor(values.author);
    this.setTitle(values.title);
    this.setSynopsys(values.synopsys);
    this.setStory(values.story);
  };
}

decorate(Story, {
  id: observable,
  setId: action,
  values: computed,
  type: observable,
  setType: action,
  genre: observable,
  setGenre: action,
  author: observable,
  setAuthor: action,
  title: observable,
  setTitle: action,
  synopsys: observable,
  setSynopsys: action,
  story: observable,
  setStory: action
});

export default Story;
