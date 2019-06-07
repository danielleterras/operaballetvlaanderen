import StoriesStore from "./StoriesStore";
class RootStore {
  constructor() {
    this.storiesStore = new StoriesStore(this);
  }
}

export default new RootStore();
