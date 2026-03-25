import "./index.css";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import {
  HDRLoader,
  OrbitControls,
  RGBELoader,
} from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
scene.add(camera);
camera.position.z = 6;

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(11, 2, 3);
scene.add(directionalLight);

const pointDirectionalLight = new THREE.DirectionalLightHelper(
  directionalLight,
  1,
);
scene.add(pointDirectionalLight);

const cubeGeometry = new THREE.PlaneGeometry(20, 20);
const cubeMaterial = new THREE.MeshStandardMaterial({
  color: 0x111111,
  metalness: 0.8,
  roughness: 1,
  envMap: scene.environment,
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.rotation.x = -Math.PI / 2;
cube.position.y = -1.4;
scene.add(cube);

const canvas = document.querySelector("canvas");
const cubeWebGL = new THREE.WebGLRenderer({ canvas, antialias: true });
cubeWebGL.setSize(window.innerWidth, window.innerHeight);
cubeWebGL.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const ModelLoader = new GLTFLoader();
ModelLoader.load("./src/assets/Images/2.glb", function (model) {
  // const box = new THREE.Box3().setFromObject(model);
  // const lowestPoint = box.min.y;
  model.scene.scale.set(150, 150, 150);
  model.scene.position.y = -1;
  scene.add(model.scene);
});
// src\assets\Images\2.glb
const lightLoader = new RGBELoader();
lightLoader.load("./src/assets/Images/light.hdr", (light) => {
  light.mapping = THREE.EquirectangularRefractionMapping;
  scene.environment = light;
  scene.background = light;
  console.log(light);
});

const orbitControl = new OrbitControls(camera, cubeWebGL.domElement);
orbitControl.autoRotate = true;
orbitControl.enableDamping = true;
orbitControl.dampingFactor = 0.05;
orbitControl.enableZoom = true;
const animatetime = new THREE.Clock();
function animate() {
  const time = animatetime.getElapsedTime();
  requestAnimationFrame(animate);
  cubeWebGL.render(scene, camera);
  // cube.rotation.x = time * 6;
  orbitControl.update();
}
animate();

const canvasReponsive = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  cubeWebGL.setSize(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix();
  cubeWebGL.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

window.addEventListener("resize", canvasReponsive);
