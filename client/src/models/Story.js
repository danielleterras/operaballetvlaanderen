import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Story {
  constructor(id = uuid.v4(), genre, author, title, synopsys, story, votes) {
    this.id = id;
    this.genre = genre;
    this.author = author;

    this.title = title;
    this.synopsys = synopsys;
    this.story = story;
    this.votes = 0;
  }

  setId = id => (this.id = id);
  setGenre = value => (this.genre = value);
  setAuthor = value => (this.author = value);
  setTitle = value => (this.title = value);
  setSynopsys = value => (this.synopsys = value);
  setStory = value => (this.story = value);
  setVotes = value => (this.votes = value);
  //setVotes = () => (this.votes = this.votes + 1);

  increment = () => {
    this.votes = this.votes + 1;
    console.log(this.votes);
  };

  get values() {
    return {
      id: this.id,
      genre: this.genre,
      author: this.author,
      title: this.title,
      synopsys: this.synopsys,
      story: this.story,
      votes: this.votes
    };
  }

  updateFromServer = values => {
    this.setId(values._id);
    this.setGenre(values.genre);
    this.setAuthor(values.author);
    this.setTitle(values.title);
    this.setSynopsys(values.synopsys);
    this.setStory(values.story);
    this.setVotes(values.votes);
  };
}

decorate(Story, {
  id: observable,
  setId: action,
  values: computed,
  genre: observable,
  setGenre: action,
  author: observable,
  setAuthor: action,
  title: observable,
  setTitle: action,
  synopsys: observable,
  setSynopsys: action,
  story: observable,
  setStory: action,
  votes: observable,
  setVotes: action,
  increment: action,
  decrement: action
});

export default Story;
