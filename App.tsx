/**
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import { Box } from '@react-three/drei/native';

const My3DScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Box position={[-1.2, 0, 0]} />
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};


function App(): React.JSX.Element {
  

  return (
    <SafeAreaView style={{flex : 1 , backgroundColor : 'white'}} >
     <My3DScene />
    </SafeAreaView>
  );
}


export default App;
