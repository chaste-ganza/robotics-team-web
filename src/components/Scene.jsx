import React from 'react'
import { Environment } from '@react-three/drei'
import RoverProxy from './RoverProxy'

export default function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} color="#ffffff" />
      <directionalLight position={[10, 10, 5]} intensity={3} color="#ffffff" castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#e0e5ff" />
      
      {/* Studio environment for clean reflections on a white background */}
      <Environment preset="studio" />
      
      <RoverProxy position={[4, 2, 0]} />
    </>
  )
}
