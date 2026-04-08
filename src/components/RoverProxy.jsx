import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Float } from '@react-three/drei'

export default function RoverProxy({ position = [0, 0, 0] }) {
  const meshRef = useRef()
  const waterRef = useRef()
  const seedRef = useRef()
  const carryRef = useRef()
  
  const scroll = useScroll()

  useFrame((state, delta) => {
    const scrollOffset = scroll.offset
    const inModulesSection = scroll.curve(0.35, 0.35) 
    
    const waterActive = scroll.curve(0.35, 0.1)
    const seedActive = scroll.curve(0.48, 0.1)
    const carryActive = scroll.curve(0.60, 0.1)

    // --- POSITIONS ---
    let targetX = position[0]
    let targetY = position[1] - (scrollOffset * 15) // Natural fall over time
    let targetZ = 0

    if (inModulesSection > 0.01) {
      targetZ = 6 
      targetY = 0

      if (waterActive > 0.1) targetX = 3.5  
      else if (seedActive > 0.1) targetX = -3.5 
      else if (carryActive > 0.1) targetX = 3.5 
      else targetX = 0
    }

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05)
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05)
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.05)

    // --- ROTATIONS ---
    if (inModulesSection > 0.01) {
      let rotY = Math.PI * 0.25 
      if (seedActive > 0.1) rotY = Math.PI * -0.25 

      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, rotY, 0.1)
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, 0.3, 0.1) 
    } else {
      meshRef.current.rotation.y = scrollOffset * Math.PI * 4
      meshRef.current.rotation.x = scrollOffset * Math.PI * 0.8
    }

    // --- ATTACHMENT SCALES (SNAP ON/OFF) ---
    if (waterRef.current) waterRef.current.scale.setScalar(THREE.MathUtils.lerp(waterRef.current.scale.x, waterActive > 0.1 ? 1 : 0.001, 0.15))
    if (seedRef.current) seedRef.current.scale.setScalar(THREE.MathUtils.lerp(seedRef.current.scale.x, seedActive > 0.1 ? 1 : 0.001, 0.15))
    if (carryRef.current) carryRef.current.scale.setScalar(THREE.MathUtils.lerp(carryRef.current.scale.x, carryActive > 0.1 ? 1 : 0.001, 0.15))
  })

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {/* Main Chassis Base - Dark Sleek Metal */}
        <boxGeometry args={[4, 1.5, 3]} />
        <meshStandardMaterial color="#0f0f0f" roughness={0.1} metalness={0.6} />
        
        {/* Wheels - Flat Matte Black */}
        <mesh position={[-2, -0.75, 1.5]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.6, 0.6, 0.4, 32]} /><meshStandardMaterial color="#1a1a1a" roughness={0.9} /></mesh>
        <mesh position={[0, -0.75, 1.5]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.6, 0.6, 0.4, 32]} /><meshStandardMaterial color="#1a1a1a" roughness={0.9} /></mesh>
        <mesh position={[2, -0.75, 1.5]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.6, 0.6, 0.4, 32]} /><meshStandardMaterial color="#1a1a1a" roughness={0.9} /></mesh>
        <mesh position={[-2, -0.75, -1.5]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.6, 0.6, 0.4, 32]} /><meshStandardMaterial color="#1a1a1a" roughness={0.9} /></mesh>
        <mesh position={[0, -0.75, -1.5]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.6, 0.6, 0.4, 32]} /><meshStandardMaterial color="#1a1a1a" roughness={0.9} /></mesh>
        <mesh position={[2, -0.75, -1.5]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.6, 0.6, 0.4, 32]} /><meshStandardMaterial color="#1a1a1a" roughness={0.9} /></mesh>

        {/* --- ATTACHMENT PROXIES --- */}
        
        {/* Water Module: Saturated Lusion Blue */}
        <mesh ref={waterRef} position={[0, 1.5, 0]} scale={0.001}>
          <capsuleGeometry args={[0.8, 1, 32, 32]} />
          <meshStandardMaterial color="#3b4cfc" roughness={0.2} metalness={0.1} />
        </mesh>

        {/* Seed Planting Module: Clean White Geometry */}
        <mesh ref={seedRef} position={[0, 1.8, 0]} scale={0.001}>
          <coneGeometry args={[1, 2, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
        </mesh>

        {/* Carrying Module: Silver Metallic Tray */}
        <mesh ref={carryRef} position={[0, 1.0, 0]} scale={0.001}>
          <boxGeometry args={[4.2, 0.5, 3.2]} />
          <meshStandardMaterial color="#e0e0e0" roughness={0.3} metalness={0.8} />
        </mesh>

      </mesh>
    </Float>
  )
}
