/**
 *
 * @format
 */

import React, {Suspense} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Canvas} from '@react-three/fiber';
import Model from './src/Model';
import useControls from 'r3f-native-orbitcontrols';

function App(): React.JSX.Element {
  const [OrbitControls, events] = useControls();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View {...events} style={{flex: 1}}>
        <Canvas>
          <OrbitControls
            enabled={true}
            maxZoom={Infinity}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            minAzimuthAngle={-Infinity}
            maxAzimuthAngle={Infinity}
            enableRotate={true}
            rotateSpeed={1.0}
            enablePan={true}
            panSpeed={1.0}
            zoomSpeed={1.0}
          />
          <ambientLight intensity={1.5} />
          <pointLight position={[20, 20, 20]} />
          <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
          <directionalLight intensity={0.8} position={[-6, 2, 2]} />

          <Model />
        </Canvas>
      </View>
    </SafeAreaView>
  );
}

export default App;
