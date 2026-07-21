import { motion } from 'framer-motion';
import { skillCategories } from '../constants/portfolioData';

function Skills() {
  return (
    <section id="skills" className="section">
      <h3>Skills</h3>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <motion.article
            className="glass-card"
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4>{category.title}</h4>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
