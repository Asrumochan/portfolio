import { motion } from 'framer-motion';
import { profile } from '../constants/portfolioData';

const highlights = ['React', 'Node', 'Express', 'MongoDB', 'REST API', 'JavaScript', 'TypeScript'];

function About() {
  return (
    <section id="about" className="section">
      <h3>About</h3>
      <div className="glass-card about-grid">
        <div>
          <p className="metric">{profile.years}</p>
          <p>Years Experience</p>
        </div>
        <div>
          <ul className="chip-list">
            {highlights.map((item) => (
              <li key={item}>
                <span>✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <motion.p
        className="about-copy"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Full stack developer with 4+ years of experience delivering reliable products end-to-end,
        collaborating across distributed teams, and turning business ideas into fast, accessible,
        maintainable web apps.
      </motion.p>
    </section>
  );
}

export default About;
