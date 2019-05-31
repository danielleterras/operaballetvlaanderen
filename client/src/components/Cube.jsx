import React, { Component } from "react";
import * as THREE from "three";

class Cube extends Component {
	constructor(props) {
		super(props);

		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.animate = this.animate.bind(this);
	}

	componentDidMount() {
		// const width = this.mount.clientWidth;
		// const height = this.mount.clientHeight;

		const width = this.mount.clientWidth;
		const height = this.mount.clientHeight;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			70,
			window.innerWidth / window.innerHeight,
			1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ antialias: true });
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: "#fff" });
		const cube = new THREE.Mesh(geometry, material);

		camera.position.z = 4;
		// camera.position.z = 4;
		scene.add(cube);
		renderer.setClearColor("#000");
		renderer.setSize(window.innerWidth, window.innerHeight);

		this.scene = scene;
		this.camera = camera;
		this.renderer = renderer;
		this.material = material;
		this.cube = cube;

		this.mount.appendChild(this.renderer.domElement);
		this.start();
	}

	componentWillUnmount() {
		this.stop();
		this.mount.removeChild(this.renderer.domElement);
	}

	start() {
		if (!this.frameId) {
			this.frameId = requestAnimationFrame(this.animate);
		}
	}

	stop() {
		cancelAnimationFrame(this.frameId);
	}

	animate() {
		this.cube.rotation.x += 0.01;
		this.cube.rotation.y += 0.01;

		this.renderScene();
		this.frameId = window.requestAnimationFrame(this.animate);
	}

	renderScene() {
		this.renderer.render(this.scene, this.camera);
	}

	render() {
		return (
			<div
				className="section"
				style={{ width: "400px", height: "400px" }}
				ref={mount => {
					this.mount = mount;
				}}
			/>
		);
	}
}

export default Cube;
