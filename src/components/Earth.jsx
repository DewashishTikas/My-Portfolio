import { useEffect, useRef, useState } from 'react';
import { Canvas, } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

function Stars() {
    const postion = useRef([(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6])
    const [rgb, setRgb] = useState([Math.round((Math.random() * 256)), Math.round((Math.random() * 256)), Math.round((Math.random() * 256))])

    const [x, y, z] = postion.current
    return (
        <mesh position={[x, y, z]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color={`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`} />
        </mesh>
    )
}

const Earth = () => {

    return (
        <div className='w-full h-full'>
            <Canvas className='w-full h-full bg-black' camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 8 }}>
                {Array.from({ length: 300 }).map((_, i) => (
                    <Stars key={i} />
                ))}
                <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default Earth;
