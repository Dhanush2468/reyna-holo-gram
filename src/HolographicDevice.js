import { useGLTF, Float } from "@react-three/drei";
import HoloPuck from "./HoloPuck";
import HolographicMaterial from "./HolographicMaterial";
import { useControls } from "leva";
import Walker from "./Walker";
import BB8 from "./BB8";

export default function HolographicDevice(props) {
  const { nodes } = useGLTF('/reyna.glb')

  const holographicControls = useControls({
    fresnelAmount: { value: 1.00, min: 0.0, max: 1.0, label: "Fresnel Amount" },
    fresnelOpacity: {
      value: 0.00,
      min: 0.0,
      max: 1.0,
      label: "Fresnel Opacity",
    },
    scanlineSize: { value: 15.0, min: 1.0, max: 15, label: "Scanline size" },
    hologramBrightness: { value: 2.00, min: 0.0, max: 2, label: "Brightness" },
    signalSpeed: { value: 2.00, min: 0.0, max: 2, label: "Signal Speed" },
    hologramOpacity: { value: 0.50, min: 0.0, max: 0.5, label: "Holo Opacity" },
    hologramColor: { value: "#016389", label: "Holo Color" },
    enableBlinking: true,
    blinkFresnelOnly: true,
    enableAdditive: false,
    enabled: true,
    Model: { options: ["VADER", "BB8", "WALKER"] },
    side: { options: ["FrontSide", "BackSide", "DoubleSide"] },
  });

  return (
    <group {...props} dispose={null}>
      <mesh rotation={[-Math.PI / 2, 0, 4.6]} scale={0.06}position={[0, 0.1, 0]}>
        {holographicControls.Model === "VADER" ? (
          <>
            <mesh geometry={nodes.Object_2.geometry}
              castShadow scale={1}
              // receiveShadow
              // material={materials.TP_Core_Eye_MI}
            >
            {holographicControls.enabled ? (
              <HolographicMaterial  {...holographicControls} />
            ) : (
              <meshPhysicalMaterial
                metalness={1}
                roughness={0.3}
                clearcoat={1}
                clearcoatRoughness={0.2}
                envMapIntensity={0.8}
                color={"black"}
              />
            )}
            </mesh>
            <mesh
              geometry={nodes.Object_3.geometry}
              castShadow scale={1}
              // receiveShadow
              // material={materials.TP_Vampire_S0_Hair_MI}
            >
            {holographicControls.enabled ? (
              <HolographicMaterial  {...holographicControls} />
            ) : (
              <meshPhysicalMaterial
                metalness={1}
                roughness={0.3}
                clearcoat={1}
                clearcoatRoughness={0.2}
                envMapIntensity={0.8}
                color={"black"}
              />
            )}
            </mesh>
            <mesh
              geometry={nodes.Object_4.geometry}
              castShadow scale={1}
              // receiveShadow
              // material={materials.TP_Vampire_S0_Heart_MI}
            >
            {holographicControls.enabled ? (
              <HolographicMaterial  {...holographicControls} />
            ) : (
              <meshPhysicalMaterial
                metalness={1}
                roughness={0.3}
                clearcoat={1}
                clearcoatRoughness={0.2}
                envMapIntensity={0.8}
                color={"black"}
              />
            )}
            </mesh>
            <mesh
              geometry={nodes.Object_5.geometry}
              castShadow scale={1}
              // receiveShadow
              // material={materials.TP_Vampire_S0_MI}
            >
            {holographicControls.enabled ? (
              <HolographicMaterial  {...holographicControls} />
            ) : (
              <meshPhysicalMaterial
                metalness={1}
                roughness={0.3}
                clearcoat={1}
                clearcoatRoughness={0.2}
                envMapIntensity={0.8}
                color={"black"}
              />
            )}
            </mesh>
          </>
        ) : holographicControls.Model === "BB8" ? (
          <BB8 scale={0.07} position={[0.5, 0, 0]} />
        ) : (
          <Walker holographicControls={holographicControls} />
        )}
      </mesh>
      <HoloPuck scale={2.5} position={[0, -1.3, 0]} />
    </group>
  );
}

useGLTF.preload('/reyna.glb')
