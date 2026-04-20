import "./index.css";
// const carPath = "/assets/models/free_bugatti_chiron.glb";
// const lightPath = "/assets/lights/light1.hdr";
// import * as THREE from "three";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { HDRLoader, OrbitControls } from "three/examples/jsm/Addons.js";

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// scene.add(camera);
// camera.position.z = 8;

// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(11, 2, 3);
// scene.add(directionalLight);

// // const pointDirectionalLight = new THREE.DirectionalLightHelper(
// //   directionalLight,
// //   1,
// // );
// // scene.add(pointDirectionalLight);

// // const cubeGeometry = new THREE.BoxGeometry();
// // const cubeMaterial = new THREE.MeshStandardMaterial({
// //   // color: 0x111111,
// //   metalness: 0.8,
// //   roughness: 1,
// //   envMap: scene.environment,
// // });
// // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// // cube.rotation.x = -Math.PI / 2;
// // cube.position.y = -1.4;
// // scene.add(cube);

// const canvas = document.querySelector("canvas");
// const cubeWebGL = new THREE.WebGLRenderer({ canvas, antialias: true });
// cubeWebGL.setSize(window.innerWidth, window.innerHeight);
// cubeWebGL.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// const ModelLoader = new GLTFLoader();
// ModelLoader.load(carPath, function (model) {
//   model.scene.scale.set(3, 3, 3);

//   model.scene.position.y = -1
//   scene.add(model.scene);
// });

// const lightLoader = new HDRLoader();
// lightLoader.load(lightPath, (light) => {
//   light.mapping = THREE.EquirectangularReflectionMapping ;
//   scene.environment = light;
//   scene.background = light;
// });

// const orbitControl = new OrbitControls(camera, cubeWebGL.domElement);

// orbitControl.autoRotate = true;
// orbitControl.enableDamping = true;
// orbitControl.dampingFactor = 0.05;
// orbitControl.enableZoom = true;
// orbitControl.autoRotateSpeed  = 0.5;

// const animatetime = new THREE.Timer();
// function animate() {
//  requestAnimationFrame(animate);
//   cubeWebGL.render(scene, camera);
//   orbitControl.update();
// }
// animate();

// const canvasReponsive = () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   cubeWebGL.setSize(window.innerWidth, window.innerHeight);
//   camera.updateProjectionMatrix();
//   cubeWebGL.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// };

// window.addEventListener("resize", canvasReponsive);


