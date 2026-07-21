import { motion } from 'framer-motion';

const timeline = ['2022 · Cognizant', 'Programmer Analyst', 'Full Stack Developer', 'Current'];

function Experience() {
  return (
    <section id="experience" className="section">
      <h3>Experience Timeline</h3>
      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            key={item}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
