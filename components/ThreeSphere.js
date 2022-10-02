import { Suspense, useEffect, useRef, useMemo } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { BufferAttribute, MathUtils } from 'three'
import { gsap } from 'gsap'

const GenerateSphere = ({ canvasRef, meshRef, shapeContainer }) => {
  const { camera, viewport, size, setSize } = useThree()
  const shapeRef = useRef()
  const distance = Math.min(200, size.width / 4)

  // Set container size
  useEffect(() => {
    setSize(
      shapeContainer.current.offsetWidth,
      shapeContainer.current.offsetHeight
    )
  }, [setSize, shapeContainer])

  // Resizing
  useEffect(() => {
    window.addEventListener('resize', () => {
      camera.aspect =
        shapeContainer.current.offsetWidth / shapeContainer.current.offsetHeight
      camera.updateProjectionMatrix()
      setSize(
        shapeContainer.current.offsetWidth,
        shapeContainer.current.offsetHeight
      )
    })
  }, [camera, shapeContainer, setSize])

  // Scaling animation
  useEffect(() => {
    gsap.to(canvasRef.current, {
      duration: 10,
      scale: 1.3,
      repeat: -1,
      yoyo: true,
      ease: 'sine',
    })
  }, [canvasRef])

  // Rotation animation
  useFrame(({ clock }) => {
    meshRef.current.rotation.x = Math.cos(clock.getElapsedTime() / 8) * Math.PI
    meshRef.current.rotation.y = Math.cos(clock.getElapsedTime() / 16) * Math.PI
  })

  // onMouseMove
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 750
    const y = (mouse.y * viewport.height) / 750
    shapeRef.current.rotation.set(-y, x, 0)
  })

  // Generate points
  const points = useMemo(() => {
    const count = 10000
    let positions = []
    for (let i = 0; i < count; i++) {
      const theta = Math.acos(MathUtils.randFloatSpread(2))
      const phi = MathUtils.randFloatSpread(360)
      const x = distance * Math.sin(theta) * Math.cos(phi)
      const y = distance * Math.sin(theta) * Math.sin(phi)
      const z = distance * Math.cos(theta)
      positions.push(x)
      positions.push(y)
      positions.push(z)
    }
    return new BufferAttribute(new Float32Array(positions), 3)
  }, [distance])

  return (
    <points ref={shapeRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" {...points} />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={1}
        threshold={0.1}
        color="#41a377"
        sizeAttenuation={true}
      />
    </points>
  )
}

const ThreeSphere = () => {
  const shapeContainer = useRef()
  const canvasRef = useRef()
  const meshRef = useRef()

  return (
    <div
      className="flex flex-1 justify-center items-center w-full max-w-[650px] mx-auto min-[150px] lg:min-h-[650px]"
      ref={shapeContainer}
    >
      <Suspense fallback={<p>Loading...</p>}>
        <div className="canvas-div">
          <Canvas ref={canvasRef} camera={{ position: [0, 0, 300] }}>
            <mesh ref={meshRef}>
              <GenerateSphere
                canvasRef={canvasRef}
                meshRef={meshRef}
                shapeContainer={shapeContainer}
              />
            </mesh>
          </Canvas>
        </div>
      </Suspense>
    </div>
  )
}

export default ThreeSphere
