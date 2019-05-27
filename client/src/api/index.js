class Api {
	constructor(entity) {
		this.entity = entity;
	}

	getAll = async () => {
		console.log("testing");
		// const r = await fetch(`/${this.entity}`);

		const r = await fetch(`/api/${this.entity}`);
		console.log(r);
		return await r.json();
	};

	create = async story => {
		const r = await fetch(
			// `/${this.entity}`,
			`/api/${this.entity}`,
			this.getOptions("post", story.values)
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
