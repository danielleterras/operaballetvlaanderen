class Api {
  constructor(entity) {
    this.entity = entity;
  }

  getAllTemplates = async () => {
    const r = await fetch(`/api/${this.entity}`);
    return await r.json();
  };

  getById = async id => {
    const r = await fetch(`/api/${this.entity}/${id}`);
    if (r.status === 200) {
      return r.json();
    }
    return Promise.reject();
  };

  getAll = async () => {
    const r = await fetch(`/api/${this.entity}`);
    return await r.json();
  };

  create = async story => {
    const r = await fetch(
      `/api/${this.entity}`,
      this.getOptions("post", story.values)
    );
    return await r.json();
  };

  update = async story => {
    const r = await fetch(
      `/api/${this.entity}/${story.id}`,
      this.getOptions("put", story.values)
    );
    return await r.json();
  };

  getOptions = (method, body = null) => {
    const options = {
      method: method.toUpperCase(),
      headers: {
        "content-type": `application/json`
      }
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return options;
  };
}

export default Api;
