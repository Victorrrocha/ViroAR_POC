import React from 'react';
import {
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
import HelloWorldSceneAR from './src/scenes/HelloWorldSceneAR'; 

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
    />
  );
};