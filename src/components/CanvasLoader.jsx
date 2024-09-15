import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress(); // Access the loading progress

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14, // Corrected from 'fontsize'
          color: '#F1F1F1', // Corrected the color format to hex
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress !== 0
          ? `${progress.toFixed(2)}%`
          : 'Loading...'} {/* Corrected the template string */}
      </p>
    </Html>
  );
};

export default CanvasLoader;
