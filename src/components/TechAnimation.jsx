import './TechAnimation.css';

const TechAnimation = () => {
  const renderBinary = () => {
    return Array.from({ length: 50 }).map((_, i) => (
      <span 
        key={i} 
        className="binary-digit"
        style={{
          animationDelay: `${Math.random() * 2}s`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
      >
        {Math.random() > 0.5 ? '1' : '0'}
      </span>
    ));
  };

  return (
    <div className="tech-animation">
      {renderBinary()}
      <div className="circuit-line horizontal"></div>
      <div className="circuit-line vertical"></div>
      <div className="circuit-node"></div>
    </div>
  );
};

export default TechAnimation;