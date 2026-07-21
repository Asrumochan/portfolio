import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants/portfolioData';
import { cn } from '../utils/cn';

const filters = ['all', 'fullstack', 'frontend', 'ai'] as const;

type Filter = (typeof filters)[number];

function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section">
      <h3>Projects</h3>
      <div className="project-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={cn('chip', activeFilter === filter && 'chip-active')}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filtered.map((project) => (
          <motion.article
            className="glass-card project-card"
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="project-media">
              <img src={project.image} alt={`${project.title} cover`} loading="lazy" />
              <div className="project-overlay" />
            </div>
            <div className="project-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul className="tags">
                {project.tech.map((stack) => (
                  <li key={stack}>{stack}</li>
                ))}
              </ul>
              <div className="actions-row">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  View Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Explore Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
