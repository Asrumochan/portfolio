import { motion } from 'framer-motion';

function Loader() {
  return (
    <div className="loader-wrap" aria-label="Loading portfolio">
      <div className="loader-scene">
        <motion.div
          className="loader-laptop"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [10, 0, 2, 0], opacity: 1 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="loader-laptop-screen">
            <p className="loader-code-line">Initializing Portfolio...</p>
            <p className="loader-code-line loader-code-line-delay">Loading Components...</p>
          </div>
          <div className="loader-laptop-base" />
        </motion.div>

        <motion.div
          className="loader-orb"
          initial={{ scale: 0.6, opacity: 0.6 }}
          animate={{ scale: [0.6, 1.1, 0.9], opacity: [0.6, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        />
      </div>
      <p className="loader-text">Loading experience...</p>
    </div>
  );
}

export default Loader;
