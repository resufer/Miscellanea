const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 'yellow' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowDown') {
    cube.rotation.x -= 0.5
  } else if (e.key === 'ArrowUp') {
    cube.rotation.x += 0.5
  } else if (e.key === 'ArrowLeft') {
    cube.rotation.y += 0.5
  } else if (e.key === 'ArrowRight') {
    cube.rotation.y -= 0.5
  }
})

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    camera.position.z += 1
  } else camera.position.z -= 1
});


animate();