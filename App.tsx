/**
 *
 * @format
 */

import React, {Suspense} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Canvas} from '@react-three/fiber';
import Model from './src/Model';
import useControls from 'r3f-native-orbitcontrols';
import BackButton from './src/components/BlackButton';
import CharacterSelector from './src/components/BlackButton';

function App(): React.JSX.Element {
  const [OrbitControls, events] = useControls();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginVertical: 24,
        }}>
        {/* <BackButton /> */}
        <Text
          style={{
            width: 204,
            color: '#fff',
            fontSize: 24,
            fontWeight: '600',
            lineHeight: 24,
            textAlign: 'center',
          }}>
          How I look ?
        </Text>
      </View>
      <View {...events} style={{flex: 1}}>
        <Canvas>
          <ambientLight intensity={1.5} />
          <pointLight position={[20, 20, 20]} />
          <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
          <directionalLight intensity={0.8} position={[-6, 2, 2]} />
          <Suspense>
            <Model />
          </Suspense>
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
          />
        </Canvas>
        <View
          style={{
            width: '100%',
            height: '40%',
            backgroundColor: 'rgba(77, 77, 75, 0.4)',
            borderRadius : 25
          }}>
          <CharacterSelector />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
