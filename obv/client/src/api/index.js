class Api {
	getAll = async () => {
		const r = await fetch("http://localhost:4000/stories");
		return await r.json();
	};

	create = async story => {
		const r = await fetch(
			"http://localhost:4000/stories",
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
