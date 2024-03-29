/**
 *
 * @format
 */

import React, { Suspense } from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';
import { Canvas } from '@react-three/fiber';
import Model from './src/Model';
import useControls from "r3f-native-orbitcontrols"

function App(): React.JSX.Element {
  
  const [OrbitControls, events] = useControls()

  return (
    <SafeAreaView style={{flex : 1 , backgroundColor : 'white'}} >
    <Canvas style={{flex:1}}>
      <OrbitControls enablePan={true}>
        
      </OrbitControls>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
    </SafeAreaView>
  );  
}


export default App;
