import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants/portfolioData';
import { cn } from '../utils/cn';

const filters = ['all', 'fullstack', 'frontend', 'ai'] as const;

type Filter = (typeof filters)[number];

function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 820 : false,
  );

  const filtered = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (filtered.length <= 1) {
      return;
    }

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    }, 3600);

    return () => window.clearInterval(id);
  }, [filtered.length]);

  const angleStep = filtered.length ? 360 / filtered.length : 0;

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % filtered.length);
  };

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
      <div className="project-carousel">
        {isMobile ? (
          <div className="mobile-project-carousel">
            <article className="glass-card project-card mobile-project-card" key={filtered[activeIndex]?.title}>
              <div className="project-media">
                <img
                  src={filtered[activeIndex]?.image}
                  alt={`${filtered[activeIndex]?.title} cover`}
                  loading="lazy"
                />
                <div className="project-overlay" />
              </div>
              <div className="project-content">
                <h4>{filtered[activeIndex]?.title}</h4>
                <p>{filtered[activeIndex]?.description}</p>
                <ul className="tags">
                  {filtered[activeIndex]?.tech.map((stack) => (
                    <li key={stack}>{stack}</li>
                  ))}
                </ul>
                <div className="actions-row">
                  <a href={filtered[activeIndex]?.demo} target="_blank" rel="noreferrer">
                    View Live Demo
                  </a>
                  <a href={filtered[activeIndex]?.github} target="_blank" rel="noreferrer">
                    Explore Code
                  </a>
                </div>
              </div>
            </article>

            <div className="mobile-carousel-controls">
              <button className="carousel-nav" onClick={goPrev} aria-label="Previous project">
                ‹
              </button>
              <button className="carousel-nav" onClick={goNext} aria-label="Next project">
                ›
              </button>
            </div>
          </div>
        ) : null}

        {!isMobile ? (
        <div className="carousel-shell">
          <button className="carousel-nav" onClick={goPrev} aria-label="Previous project">
            ‹
          </button>
          <div className="project-stage">
            <motion.div
              className="project-ring"
              animate={{ rotateY: -activeIndex * angleStep }}
              transition={{ duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {filtered.map((project, index) => (
                <article
                  className="glass-card project-card project-card-3d"
                  key={project.title}
                  style={{ transform: `rotateY(${index * angleStep}deg) translateZ(var(--carousel-radius))` }}
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
                </article>
              ))}
            </motion.div>
          </div>
          <button className="carousel-nav" onClick={goNext} aria-label="Next project">
            ›
          </button>
        </div>
        ) : null}

        <div className="carousel-dots" aria-label="Project selector">
          {filtered.map((project, index) => (
            <button
              key={project.title}
              className={cn('carousel-dot', index === activeIndex && 'carousel-dot-active')}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
