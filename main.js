import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Objects
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#eee'  , emissive : '#69cfcd' });
const dodecahedron = new THREE.Mesh(geometry, material); // Use Mesh constructor

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: "#69cfcd" });
const box = new THREE.Mesh(boxGeometry, boxMaterial); // Use Mesh constructor

scene.add(dodecahedron);
scene.add(box);

// Adding light
const light = new THREE.SpotLight(0x006769, 1);
light.position.set(1, 1, 1);
scene.add(light);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

  box.position.y -=1 ; 


// Animation
function animate() {
  requestAnimationFrame(animate);
  
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  box.rotation.y += 0.05;
  
  renderer.render(scene, camera);
  controls.update();
}

animate();
