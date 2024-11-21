import { useEffect } from 'react';

import * as THREE from 'three';

import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './lib/SceneInit';


function App() {
  useEffect(() => {
    const test = new SceneInit('canvasid');
    test.initialize();
    test.animate();


    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
   
    const fontLoader = new FontLoader();
    fontLoader.load(
      'node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',
      (droidFont) => {
        const textGeometry = new TextGeometry('hello world!', {
          size: 20,
          height: 4,
          font: droidFont,
        });
        const textMaterial = new THREE.MeshLambertMaterial();
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.x = -85;
        textMesh.position.y = 0;
        test.scene.add(textMesh);
      }
    );


    const ttfLoader = new TTFLoader();
    ttfLoader.load('fonts/lobster.ttf', (json) => {

      const font1 = fontLoader.parse(json);

      const textGeometry = new TextGeometry('hello world', {
        height: 2,
        size: 10,
        font: font1,
      });
      const textMaterial = new THREE.MeshLambertMaterial();
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.x = -1;
      textMesh.position.y = -10;

    });


     ttfLoader.load('fonts/lobster.ttf', (json) => {

       const font1 = fontLoader.parse(json);

       const textGeometry = new TextGeometry('Programador, pincha y mueve', {
         height: 1,
         size: 5,
         font: font1,
       });
       const textMaterial = new THREE.MeshLambertMaterial();
       const textMesh = new THREE.Mesh(textGeometry, textMaterial);

       textMesh.position.x = -4;
       textMesh.position.z = -20;
       textMesh.position.y = -15;
        test.scene.add(textMesh);
     });

     let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('./public/old_computers/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      // console.log(loadedModel);3DEnv-main\public



      gltfScene.scene.position.z = -110;
      gltfScene.scene.position.y = -200;
      gltfScene.scene.scale.set(100, 100, 100);
      test.scene.add(gltfScene.scene);
    });

  }, []);

  return (
    
    <div>
      <canvas id="canvasid" />
    </div>
  );
}

export default App;
