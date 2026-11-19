
import * as THREE from 'three';

// Scene তৈরি
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x101522);

// Camera তৈরি
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 4;

// Renderer তৈরি
const renderer = new THREE.WebGLRenderer({
  antialias: true
});

renderer.setSize(
  window.innerWidth,
  window.innerHeight - 75
);

document.body.appendChild(renderer.domElement);

// 3D Cube তৈরি
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

const material = new THREE.MeshStandardMaterial({
  color: 0x00ccff,
  roughness: 0.3,
  metalness: 0.2
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// আলো
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(3, 4, 5);
scene.add(light);

scene.add(new THREE.AmbientLight(0xffffff, 1));

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.015;

  renderer.render(scene, camera);
}

animate();

// Screen Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / (window.innerHeight - 75);
  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight - 75
  );
});
