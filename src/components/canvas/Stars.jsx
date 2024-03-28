// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>
        
//         <Preload all />
        
//       </Canvas>
//       <div
//         style={{
//           position: "absolute",
//           bottom: 10,
//           width: "100%",
//           textAlign: "right",
//           color: "rgb(170, 166, 195)",
//           padding: "1rem",
//           fontSize:"1.5rem",
//         }}
//       >
//         Made with ❤️ by Dhruv Tyagi
//       </div>
//     </div>
//   );
// };

import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    // Set up an interval to toggle the glowing effect every 2 seconds
    const interval = setInterval(() => {
      setIsGlowing((prevIsGlowing) => !prevIsGlowing);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        
        <Preload all />
        
      </Canvas>
      <div
        className={`absolute bottom-1 right-0 p-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${
          isGlowing ? 'text-glow' : 'text-gray-500'
        }`}
      >
        ~ Made with ❤️ by Dhruv Tyagi
      </div>
    </div>
  );
};

export default StarsCanvas;
