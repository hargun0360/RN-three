import React, {useRef, useEffect} from 'react';
import {useGLTF, useAnimations, useFBX} from '@react-three/drei/native';
import {AnimationMixer} from 'three';

export default function Model(props: any) {
  const group = useRef();
  const animation = [];
  const { animations: animationData } = useFBX(require('../src/animation.fbx'));
  animationData[0].name = "Idle";
  animation.push(animationData[0]);
  const {nodes, materials} = useGLTF(require('../src/model.glb'));
  const {actions} = useAnimations(animation, group);

  useEffect(() => {
   
    actions["Idle"].play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} scale={0.02}>
      <group name="Scene">
        <group name="CC3_Base_Plus" scale={0.01}>
          <skinnedMesh
            name="Bra"
            geometry={nodes.Bra.geometry}
            material={materials.Bra}
            skeleton={nodes.Bra.skeleton}
            morphTargetDictionary={nodes.Bra.morphTargetDictionary}
            morphTargetInfluences={nodes.Bra.morphTargetInfluences}
          />
          <group name="Bun_1">
            <skinnedMesh
              name="Bun_2"
              geometry={nodes.Bun_2.geometry}
              material={materials.Hair}
              skeleton={nodes.Bun_2.skeleton}
            />
            <skinnedMesh
              name="Bun_3"
              geometry={nodes.Bun_3.geometry}
              material={materials['Hair.002']}
              skeleton={nodes.Bun_3.skeleton}
            />
            <skinnedMesh
              name="Bun_4"
              geometry={nodes.Bun_4.geometry}
              material={materials.Scalp}
              skeleton={nodes.Bun_4.skeleton}
            />
            <skinnedMesh
              name="Bun_5"
              geometry={nodes.Bun_5.geometry}
              material={materials['Hair.001']}
              skeleton={nodes.Bun_5.skeleton}
            />
          </group>
          <group name="CC_Base_Body">
            <skinnedMesh
              name="CC_Base_Body_1"
              geometry={nodes.CC_Base_Body_1.geometry}
              material={materials.Std_Skin_Head}
              skeleton={nodes.CC_Base_Body_1.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_1.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_1.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Body_2"
              geometry={nodes.CC_Base_Body_2.geometry}
              material={materials.Std_Skin_Body}
              skeleton={nodes.CC_Base_Body_2.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_2.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_2.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Body_3"
              geometry={nodes.CC_Base_Body_3.geometry}
              material={materials.Std_Skin_Arm}
              skeleton={nodes.CC_Base_Body_3.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_3.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_3.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Body_4"
              geometry={nodes.CC_Base_Body_4.geometry}
              material={materials.Std_Skin_Leg}
              skeleton={nodes.CC_Base_Body_4.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_4.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_4.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Body_5"
              geometry={nodes.CC_Base_Body_5.geometry}
              material={materials.Std_Nails}
              skeleton={nodes.CC_Base_Body_5.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_5.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_5.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Body_6"
              geometry={nodes.CC_Base_Body_6.geometry}
              material={materials.Std_Eyelash}
              skeleton={nodes.CC_Base_Body_6.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_6.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_6.morphTargetInfluences}
            />
          </group>
          <group name="CC_Base_Eye">
            <skinnedMesh
              name="CC_Base_Eye_1"
              geometry={nodes.CC_Base_Eye_1.geometry}
              material={materials.Std_Eye_R}
              skeleton={nodes.CC_Base_Eye_1.skeleton}
              morphTargetDictionary={nodes.CC_Base_Eye_1.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Eye_1.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Eye_2"
              geometry={nodes.CC_Base_Eye_2.geometry}
              material={materials.Std_Cornea_R}
              skeleton={nodes.CC_Base_Eye_2.skeleton}
              morphTargetDictionary={nodes.CC_Base_Eye_2.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Eye_2.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Eye_3"
              geometry={nodes.CC_Base_Eye_3.geometry}
              material={materials.Std_Eye_L}
              skeleton={nodes.CC_Base_Eye_3.skeleton}
              morphTargetDictionary={nodes.CC_Base_Eye_3.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Eye_3.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Eye_4"
              geometry={nodes.CC_Base_Eye_4.geometry}
              material={materials.Std_Cornea_L}
              skeleton={nodes.CC_Base_Eye_4.skeleton}
              morphTargetDictionary={nodes.CC_Base_Eye_4.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Eye_4.morphTargetInfluences}
            />
          </group>
          <group name="CC_Base_Teeth">
            <skinnedMesh
              name="CC_Base_Teeth_1"
              geometry={nodes.CC_Base_Teeth_1.geometry}
              material={materials.Std_Upper_Teeth}
              skeleton={nodes.CC_Base_Teeth_1.skeleton}
              morphTargetDictionary={
                nodes.CC_Base_Teeth_1.morphTargetDictionary
              }
              morphTargetInfluences={
                nodes.CC_Base_Teeth_1.morphTargetInfluences
              }
            />
            <skinnedMesh
              name="CC_Base_Teeth_2"
              geometry={nodes.CC_Base_Teeth_2.geometry}
              material={materials.Std_Lower_Teeth}
              skeleton={nodes.CC_Base_Teeth_2.skeleton}
              morphTargetDictionary={
                nodes.CC_Base_Teeth_2.morphTargetDictionary
              }
              morphTargetInfluences={
                nodes.CC_Base_Teeth_2.morphTargetInfluences
              }
            />
          </group>
          <skinnedMesh
            name="CC_Base_Tongue"
            geometry={nodes.CC_Base_Tongue.geometry}
            material={materials.Std_Tongue}
            skeleton={nodes.CC_Base_Tongue.skeleton}
            morphTargetDictionary={nodes.CC_Base_Tongue.morphTargetDictionary}
            morphTargetInfluences={nodes.CC_Base_Tongue.morphTargetInfluences}
          />
          <group name="Female_Angled_1">
            <skinnedMesh
              name="Female_Angled_2"
              geometry={nodes.Female_Angled_2.geometry}
              material={materials.Female_Angled}
              skeleton={nodes.Female_Angled_2.skeleton}
            />
            <skinnedMesh
              name="Female_Angled_3"
              geometry={nodes.Female_Angled_3.geometry}
              material={materials.Female_Angled_Base}
              skeleton={nodes.Female_Angled_3.skeleton}
            />
          </group>
          <skinnedMesh
            name="Fit_shirts"
            geometry={nodes.Fit_shirts.geometry}
            material={materials.Fit_shirts}
            skeleton={nodes.Fit_shirts.skeleton}
            morphTargetDictionary={nodes.Fit_shirts.morphTargetDictionary}
            morphTargetInfluences={nodes.Fit_shirts.morphTargetInfluences}
          />
          <skinnedMesh
            name="High_Heels"
            geometry={nodes.High_Heels.geometry}
            material={materials.High_Heels}
            skeleton={nodes.High_Heels.skeleton}
            morphTargetDictionary={nodes.High_Heels.morphTargetDictionary}
            morphTargetInfluences={nodes.High_Heels.morphTargetInfluences}
          />
          <skinnedMesh
            name="Long_slim_coat"
            geometry={nodes.Long_slim_coat.geometry}
            material={materials.Long_slim_coat}
            skeleton={nodes.Long_slim_coat.skeleton}
            morphTargetDictionary={nodes.Long_slim_coat.morphTargetDictionary}
            morphTargetInfluences={nodes.Long_slim_coat.morphTargetInfluences}
          />
          <skinnedMesh
            name="Slim_fit_pants"
            geometry={nodes.Slim_fit_pants.geometry}
            material={materials.Slim_fit_pants}
            skeleton={nodes.Slim_fit_pants.skeleton}
            morphTargetDictionary={nodes.Slim_fit_pants.morphTargetDictionary}
            morphTargetInfluences={nodes.Slim_fit_pants.morphTargetInfluences}
          />
          <skinnedMesh
            name="Sunglasses_1_export_1"
            geometry={nodes.Sunglasses_1_export_1.geometry}
            material={materials.Sunglasses}
            skeleton={nodes.Sunglasses_1_export_1.skeleton}
          />
          <skinnedMesh
            name="Underwear_Bottoms"
            geometry={nodes.Underwear_Bottoms.geometry}
            material={materials.Underwear_Bottoms}
            skeleton={nodes.Underwear_Bottoms.skeleton}
            morphTargetDictionary={
              nodes.Underwear_Bottoms.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Underwear_Bottoms.morphTargetInfluences
            }
          />
          <primitive object={nodes.RL_BoneRoot} />
        </group>
      </group>
    </group>
  );
}
