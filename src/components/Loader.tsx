import { motion } from 'framer-motion';

function Loader() {
  return (
    <div className="loader-wrap" aria-label="Loading portfolio">
      <motion.div
        className="loader-orb"
        initial={{ scale: 0.6, opacity: 0.6 }}
        animate={{ scale: [0.6, 1.1, 0.9], opacity: [0.6, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
      />
      <p>Loading experience...</p>
    </div>
  );
}

export default Loader;
