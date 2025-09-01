import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const a = useProgress();
  console.log(a);
  return (
    <Html center>
      <div className="flex justify-center items-center flex-col">
        <div className="w-20 h-20 border-4 border-opacity-20 border-cyan-500 border-t-cyan-800 rounded-full animate-spin"></div>
        <span className="text-white text-lg font-semibold mt-4">{a.progress.toFixed(2)}% Loaded</span>
      </div>
    </Html>
  );
};

export default Loader;
