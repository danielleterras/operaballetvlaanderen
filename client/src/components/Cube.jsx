import React, { Component } from "react";

import "./style.css";

class Cube extends Component {
	constructor() {
		super();
		this.state = {
			x: -30,
			y: 30,
			z: 0,
			zoom: 100,
			opacity: 75,
			perspective: 700
		};

		this.onMouseMove = this.onMouseMove.bind(this);
	}

	componentDidMount() {
		document.addEventListener("mousemove", this.onMouseMove);
	}

	updateX(e) {
		this.setState({ x: e.target.value });
	}
	updateY(e) {
		this.setState({ y: e.target.value });
	}
	updateZ(e) {
		this.setState({ z: e.target.value });
	}
	updateZoom(e) {
		this.setState({ zoom: e.target.value });
	}
	updateOpacity(e) {
		this.setState({ opacity: e.target.value });
	}
	updatePerspective(e) {
		this.setState({ perspective: e.target.value });
	}

	onMouseMove(e) {
		var hh = window.innerHeight / 2,
			hw = window.innerWidth / 2;
		this.setState({
			x: ((hh - e.clientY) / hh) * 90,
			y: ((e.clientX - hw) / hw) * 90,
			z: 0
		});
	}

	render() {
		var { x, y, z, zoom, opacity, perspective } = this.state,
			cubeStyle = {
				transform: `translateZ(${zoom}px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
			},
			containerStyle = { perspective: `${perspective}px` },
			surfaceStyle = { opacity: opacity / 100 };

		return (
			<>
				<div className="wrapper">
					<div className="container" style={containerStyle}>
						<div className="cube" style={cubeStyle}>
							{Array(6)
								.fill()
								.map(() => (
									<figure style={surfaceStyle} />
								))}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Cube;
