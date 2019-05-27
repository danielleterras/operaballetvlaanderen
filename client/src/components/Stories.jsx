import React, { Component } from "react";
import { inject, observer } from "mobx-react";

const Stories = ({ store }) => {
	const { stories } = store;
	const titleInput = React.createRef();

	const handleSubmit = e => {
		e.preventDefault();
		store.addStory({ title: titleInput.current.value });
		titleInput.current.value = "";
	};
	return (
		<>
			<h1>test</h1>
			<ul>
				{stories.map(story => (
					<li key={story.id}>{story.title}</li>
				))}
			</ul>

			<form onSubmit={handleSubmit}>
				<label htmlFor="story">
					Story
					<input type="text" name="story" id="story" ref={titleInput} />
				</label>
				<input type="submit" value="add" />
			</form>
		</>
	);
};

export default inject("store")(observer(Stories));
