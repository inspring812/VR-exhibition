import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

export default class VR extends Component {
  componentDidMount() {
    let camera: any, scene: any, renderer: any;

    let isUserInteracting = false,
      onPointerDownMouseX = 0,
      onPointerDownMouseY = 0,
      lon = 0,
      onPointerDownLon = 0,
      lat = 0,
      onPointerDownLat = 0,
      phi = 0,
      theta = 0;

    const url =
      "https://lab.cuz-art.com/wp-content/uploads/2021/05/Section01.png";

    init();
    animate();

    function init() {
      // const container = document.getElementById('root');

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        1100
      );

      scene = new THREE.Scene();

      const geometry = new THREE.SphereGeometry(500, 60, 40);
      // invert the geometry on the x-axis so that all of the faces point inward
      geometry.scale(-1, 1, 1);

      const texture = new THREE.TextureLoader().load(url);
      const material = new THREE.MeshBasicMaterial({ map: texture });

      const mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      // container.appendChild(renderer.domElement);
      document.body.appendChild(renderer.domElement);

      document.body.style.touchAction = "none";
      document.body.addEventListener("pointerdown", onPointerDown);

      document.addEventListener("wheel", onDocumentMouseWheel);

      document.addEventListener("dragover", function (event) {
        event.preventDefault();
        if (event != null) event.dataTransfer.dropEffect = "copy";
      });

      document.addEventListener("dragenter", function () {
        document.body.style.opacity = "0.5";
      });

      document.addEventListener("dragleave", function () {
        document.body.style.opacity = "1";
      });

      document.addEventListener("drop", function (event) {
        event.preventDefault();

        const reader = new FileReader();
        reader.addEventListener("load", function (event) {
          material.map.image.src = event.target.result;
          material.map.needsUpdate = true;
        });
        reader.readAsDataURL(event.dataTransfer.files[0]);

        document.body.style.opacity = "1";
      });

      //

      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onPointerDown(event: any) {
      if (event.isPrimary === false) return;

      isUserInteracting = true;

      onPointerDownMouseX = event.clientX;
      onPointerDownMouseY = event.clientY;

      onPointerDownLon = lon;
      onPointerDownLat = lat;

      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp);
    }

    function onPointerMove(event: any) {
      if (event.isPrimary === false) return;

      lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon;
      lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat;
    }

    function onPointerUp() {
      // if (event.isPrimary === false) return;

      isUserInteracting = false;

      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    }

    function onDocumentMouseWheel(event: any) {
      const fov = camera.fov + event.deltaY * 0.05;

      camera.fov = THREE.MathUtils.clamp(fov, 10, 75);

      camera.updateProjectionMatrix();
    }

    function animate() {
      requestAnimationFrame(animate);
      update();
    }

    function update() {
      if (isUserInteracting === false) {
        lon += 0.1;
      }

      lat = Math.max(-85, Math.min(85, lat));
      phi = THREE.MathUtils.degToRad(90 - lat);
      theta = THREE.MathUtils.degToRad(lon);

      const x = 500 * Math.sin(phi) * Math.cos(theta);
      const y = 500 * Math.cos(phi);
      const z = 500 * Math.sin(phi) * Math.sin(theta);

      camera.lookAt(x, y, z);

      renderer.render(scene, camera);
    }
  }

  // componentWillUnmount() {
  //   console.log("dispose renderer!");
  //   renderer.dispose();

  //   scene.traverse((object) => {
  //     if (!object.isMesh) return;

  //     console.log("dispose geometry!");
  //     object.geometry.dispose();

  //     if (object.material.isMaterial) {
  //       cleanMaterial(object.material);
  //     } else {
  //       // an array of materials
  //       for (const material of object.material) cleanMaterial(material);
  //     }
  //   });

  //   const cleanMaterial = (material) => {
  //     console.log("dispose material!");
  //     material.dispose();

  //     // dispose textures
  //     for (const key of Object.keys(material)) {
  //       const value = material[key];
  //       if (value && typeof value === "object" && "minFilter" in value) {
  //         console.log("dispose texture!");
  //         value.dispose();
  //       }
  //     }
  //   };
  // }

  render() {
    return (
      <div></div>
      // <div
      //   ref={(mount) => {
      //     this.mount = mount;
      //   }}
      // />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<VR />, rootElement);
