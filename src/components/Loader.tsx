import { HashLoader } from "react-spinners";

function Loader() {
  return (
    <div className="loader-wrap" aria-label="Loading portfolio">
      <div className="loader-scene">
        <HashLoader color="var(--primary)" size={80} speedMultiplier={1.2} />
      </div>
      <p className="loader-text">Loading experience...</p>
    </div>
  );
}

export default Loader;
