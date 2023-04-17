import React from 'react';
import {
    ViroARScene,
    ViroText,
    Viro3DObject,
    ViroAmbientLight
  } from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      <ViroText text="Victor Rocha" position={[0, 0, -2]} />
      <Viro3DObject
        source={require('../../assets/3D_Objects/sphere.obj')}
        position={[0.0, 0.0, -1]}
        resources={[require('../../assets/3D_Objects/sphere.mtl')]}
        type="OBJ"
        scale={[0.05, 0.05, 0.05]}
      />
    </ViroARScene>
  );
};

export default HelloWorldSceneAR;
