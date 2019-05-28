import StoriesStore from "./StoriesStore";

class RootStore {
  constructor() {
    this.storiesStore = new StoriesStore(this);
    //console.log(this.storiesStore);
  }
}

export default new RootStore();
