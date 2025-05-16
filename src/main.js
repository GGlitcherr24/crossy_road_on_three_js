import * as THREE from "three";
import { Render } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { player } from './components/Player';
import "./style.css";

const scene = new THREE.Scene();
scene.add(player);

const camera = Camera();
scene.add(Camera);

const renderer = Renderer();
renderer.render(scene, camera);


