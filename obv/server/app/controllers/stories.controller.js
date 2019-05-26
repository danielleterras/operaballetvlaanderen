const Story = require("../models/story.model.js");

exports.create = (req, res) => {
	if (!req.body.title) {
		return res.status(500).send({ err: "title can not be empty" });
	}

	const story = new Story({
		title: req.body.title
	});

	story
		.save()
		.then(story => res.send(story))
		.catch(err => {
			res.status(500).send({ error: err.story || "Error" });
		});
};

exports.findAll = async (req, res) => {
	try {
		const stories = await Story.find();
		res.send(stories);
	} catch (err) {
		res.status(500).send({ err: err.story || "Error" });
	}
};

// exports.findOne = async (req, res) => {
// 	try {
// 		const book = await Book.findById(req.params.bookId);
// 		if (book) {
// 			res.send(book);
// 		} else {
// 			res.status(404).send("No book found");
// 		}
// 	} catch (err) {
// 		if (err.kind === "ObjectId") {
// 			return res.status(500).send("Geen geldig ID");
// 		}
// 		return res.status(500).send(err);
// 	}
// };
