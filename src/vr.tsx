
import React, { Component, useEffect } from 'react';
import ReactDOM from "react-dom";
import * as THREE from 'three';
import { Int8Attribute } from 'three';
import './App.css';
import section_01 from "./source/Section01.png";


function vr(){

    let camera,
    scene,
    renderer;

let isUserInteracting = false,
    onPointerDownMouseX = 0,
    onPointerDownMouseY = 0,
    lon = 0,
    onPointerDownLon = 0,
    lat = 0,
    onPointerDownLat = 0,
    phi = 0,
    theta = 0;


useEffect(()=>{
    //생성
    console.log('컴포넌트가 화면에 나타남');
    initvr();

 return()=>{
     //소멸
     console.log('컴포넌트가 화면에서 사라짐');
     unmountvr();

 };
},[]);

function initvr(){
    init();
    animate();


}
function unmountvr(){
    this.geometry.dispose();
    this.material.dispose();
    this.texture.dispose();
}

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

          const texture = new THREE
              .TextureLoader()
              .load(section_01);
          const material = new THREE.MeshBasicMaterial({map: texture});

          const mesh = new THREE.Mesh(geometry, material);

          scene.add(mesh);

          renderer = new THREE.WebGLRenderer();
          renderer.setPixelRatio(window.devicePixelRatio);
          renderer.setSize(window.innerWidth, window.innerHeight);
          // container.appendChild(renderer.domElement);
          document.body.appendChild( renderer.domElement );

          document.body.style.touchAction = 'none';
          document.body.addEventListener('pointerdown', onPointerDown);

          document.addEventListener('wheel', onDocumentMouseWheel);

          document.addEventListener('dragover', function (event) {

              event.preventDefault();
              event.dataTransfer.dropEffect = 'copy';

          });

          document.addEventListener('dragenter', function () {

              document.body.style.opacity = "0.5";

          });

          document.addEventListener('dragleave', function () {

              document.body.style.opacity = "1";

          });

          document.addEventListener('drop', function (event) {

              event.preventDefault();

              const reader = new FileReader();
              reader.addEventListener('load', function (event) {

                  material.map.image.src = event.target.result;
                  material.map.needsUpdate = true;

              });
              reader.readAsDataURL(event.dataTransfer.files[0]);

              document.body.style.opacity = "1";

          });

          //

          window.addEventListener('resize', onWindowResize);

      }

      function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    };

    function onPointerDown(event) {

        if (event.isPrimary === false) 
            return;
        
        isUserInteracting = true;

        onPointerDownMouseX = event.clientX;
        onPointerDownMouseY = event.clientY;

        onPointerDownLon = lon;
        onPointerDownLat = lat;

        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);

    };

    function onPointerMove(event) {

        if (event.isPrimary === false) 
            return;
        
        lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon;
        lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat;

    };

    function onPointerUp() {

        // if (event.isPrimary === false) return;

        isUserInteracting = false;

        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);

    };

    function onDocumentMouseWheel(event) {

        const fov = camera.fov + event.deltaY * 0.05;

        camera.fov = THREE
            .MathUtils
            .clamp(fov, 10, 75);

        camera.updateProjectionMatrix();

    };

    function animate() {

        requestAnimationFrame(animate);
        // renderer.render( scene, camera );
        update();

    };

    function update() {

        if (isUserInteracting === false) {

            lon += 0.1;

        }

        lat = Math.max(-85, Math.min(85, lat));
        phi = THREE
            .MathUtils
            .degToRad(90 - lat);
        theta = THREE
            .MathUtils
            .degToRad(lon);

        const x = 500 * Math.sin(phi) * Math.cos(theta);
        const y = 500 * Math.cos(phi);
        const z = 500 * Math.sin(phi) * Math.sin(theta);

        camera.lookAt(x, y, z);

        renderer.render(scene, camera);

        if (this.mount !== null){
            this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
            this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
            this.camera.updateProjectionMatrix();
        }
      }
    

      return (
          <div ref={ref => (this.mount = ref)} />
      );
  
}


