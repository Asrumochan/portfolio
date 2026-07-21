import { motion } from 'framer-motion';

const timeline = [
  { year: '2022', role: 'Programmer Analyst', org: 'Cognizant' },
  { year: '2023', role: 'Full Stack Developer', org: 'Cognizant' },
  { year: 'Current', role: 'Building scalable apps', org: 'Remote-ready' },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <h3>My Experience</h3>
      <div className="experience-scene">
        <motion.article
          className="experience-board glass-card"
          initial={{ opacity: 0.55, rotateX: -24, y: 80, scale: 0.92 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="experience-head">
            <span>Career Board</span>
            <p>From analyst foundations to full stack execution</p>
          </div>

          <div className="experience-track">
            {timeline.map((item) => (
              <div className="experience-node" key={`${item.year}-${item.role}`}>
                <span className="experience-year">{item.year}</span>
                <h4>{item.role}</h4>
                <p>{item.org}</p>
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Experience;
