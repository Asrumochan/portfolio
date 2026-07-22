import { InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader-wrap" aria-label="Loading portfolio">
      <div className="loader-scene">
        <InfinitySpin color="var(--primary)" width="220" />
      </div>
      <p className="loader-text">Loading experience...</p>
    </div>
  );
}

export default Loader;
