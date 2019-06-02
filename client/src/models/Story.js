import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Story {
  constructor(
    id = uuid.v4(),
    type,
    genre,
    author,
    title,
    synopsys,
    story,
    votes = 0
  ) {
    this.id = id;
    this.type = type;
    this.genre = genre;
    this.author = author;

    this.title = title;
    this.synopsys = synopsys;
    this.story = story;
    this.votes = votes;
  }

  setId = id => (this.id = id);
  setType = value => (this.type = value);
  setGenre = value => (this.genre = value);
  setAuthor = value => (this.author = value);
  setTitle = value => (this.title = value);
  setSynopsys = value => (this.synopsys = value);
  setStory = value => (this.story = value);
  setVotes = value => (this.votes = value);

  get values() {
    return {
      type: this.type,
      genre: this.genre,
      author: this.author,
      title: this.title,
      synopsys: this.synopsys,
      story: this.story,
      votes: this.votes
    };
  }

  vote = () => {
    this.votes++;
    console.log(this.votes);
  };

  updateFromServer = values => {
    this.setId(values._id);
    this.setType(values.type);
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
  setStory: action,
  votes: observable,
  setVotes: action,
  vote: action
});

export default Story;
