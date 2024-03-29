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


function App(): React.JSX.Element {
  

  return (
    <SafeAreaView style={{flex : 1 , backgroundColor : 'white'}} >
    <Canvas>
      <Suspense>
        <Model />
      </Suspense>
    </Canvas>
    </SafeAreaView>
  );
}


export default App;
