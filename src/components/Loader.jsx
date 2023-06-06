import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html>
      <span className="canvas-loader"></span>
      <p className="text-[14px] mt-[40px] font-[800] text-[#f1f1f1]">{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default Loader;
