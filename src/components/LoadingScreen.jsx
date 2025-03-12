import { useEffect, useState } from 'react';

function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(50px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        width: '200px',
        height: '2px',
        background: '#ffffff20',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'white',
          transition: 'width 0.2s ease-out',
        }} />
      </div>
      <div style={{
        color: 'white',
        marginTop: '1rem',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
      }}>
        {progress}%
      </div>
    </div>
    </>
  );
}

export default LoadingScreen;