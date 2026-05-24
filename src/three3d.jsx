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

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/Addons.js";
// import { roughness } from "three/tsl";

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100,
// );
// scene.add(camera);

// const cubeTexture = new THREE.TextureLoader();

// const textLoader = (path) => {
//   console.log(path);
//   const texture = cubeTexture.load(path);
//   // texture.colorSpace = THREE.SRGBColorSpace;
//   return texture;
// };

// // let cubes = [];

// // const cubeGeometry = new THREE.CylinderGeometry(1, 1, 1, 4,4,true);
// const cubeGeometry = new THREE.BoxGeometry(1, 1.8, 1);

// // const cubeMaterial = [
// //   "/Images/1.jpeg",
// //   "/Images/2.jpeg",
// //   "/Images/3.jpeg",
// //   "/Images/4.jpeg",
// //   "/Images/5.jpeg",
// //   "/Images/6.jpeg",
// // ].map(
// //   (elem) =>
// //     new THREE.MeshBasicMaterial({ map: textLoader(elem), wireframe: false }),
// // );

// const cubeMaterial = new THREE.MeshStandardMaterial({
//   map: cubeTexture.load("/Images/34.jpg"),
//   roughness: 222,
//   roughnessMap: cubeTexture.load("/Images/6.jpeg"),

//   // wireframe: true,
//   // side: THREE.DoubleSide,
// });

// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);
// // cubes.push(cube);
// // console.log(cubes);

// const cubeLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(cubeLight);
// // cubeLight.position.set(10,20,15)

// // const pointLight = new THREE.PointLightHelper()
// // scene.add(pointLight)

// const canvas = document.querySelector("canvas");
// const cubeRendredGL = new THREE.WebGLRenderer({ canvas, antialias: true });
// cubeRendredGL.setSize(innerWidth, innerHeight);
// cubeRendredGL.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// cubeRendredGL.render(scene, camera);

// // cube.rotation.x = Math.PI / 10; // 0.785 - Tilts it down to see the top
// // cube.rotation.y = Math.PI / 25; // 0.785 - Turns it to see the side
// // cube.rotation.z = 0;

// camera.position.z = 2;
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// const orbitControl = new OrbitControls(camera, cubeRendredGL.domElement);
// orbitControl.enableDamping = true;
// // orbitControl.autoRotate = true;
// orbitControl.dampingFactor = 0.1;
// const clock = new THREE.Clock();

// // cube.position.x =0.2
// // cube.position.y =0.2
// cube.position.z = -0.2;

// camera.position.x = 1;

// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   cubeRendredGL.setSize(innerWidth, innerHeight);
//   camera.updateProjectionMatrix();
// });

// function animation() {
//   const elapsedTime = clock.getElapsedTime();
//   requestAnimationFrame(animation);
//   cubeRendredGL.render(scene, camera);
//   // cube.rotation.y = elapsedTime;
//   // cube.rotation.x = elapsedTime;
//   orbitControl.update();
// }
// animation();
