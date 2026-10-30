function ServerRack({ className }) {
  return (
    <div className={`rack ${className}`}>
      {Array.from({ length: 6 }, (_, index) => (
        <i key={index} />
      ))}
    </div>
  );
}

function ServerRackVisual() {
  return (
    <div className="infra-image">
      <ServerRack className="rack-one" />
      <ServerRack className="rack-two" />
      <ServerRack className="rack-three" />
      <div className="floor-grid" />
    </div>
  );
}

export default ServerRackVisual;
