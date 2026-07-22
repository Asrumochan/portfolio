import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Loader() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioLoopRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const AudioContextClass =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextClass) {
      return;
    }

    const context = new AudioContextClass();
    audioContextRef.current = context;

    const playTick = () => {
      if (context.state !== 'running') {
        return;
      }

      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const now = context.currentTime;

      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(620, now);
      oscillator.frequency.exponentialRampToValueAtTime(500, now + 0.06);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.018, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      oscillator.connect(gain);
      gain.connect(context.destination);

      oscillator.start(now);
      oscillator.stop(now + 0.08);
    };

    const unlockAudio = () => {
      context.resume().catch(() => {
        // Autoplay may block until first user interaction.
      });
    };

    unlockAudio();
    window.addEventListener('pointerdown', unlockAudio, { once: true });
    window.addEventListener('keydown', unlockAudio, { once: true });

    audioLoopRef.current = window.setInterval(playTick, 170);

    return () => {
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);

      if (audioLoopRef.current) {
        window.clearInterval(audioLoopRef.current);
        audioLoopRef.current = null;
      }

      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {
          // Ignore teardown close failures.
        });
        audioContextRef.current = null;
      }
    };
  }, []);

  return (
    <div className="loader-wrap" aria-label="Loading portfolio">
      <div className="loader-scene">
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
