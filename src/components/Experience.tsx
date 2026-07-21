import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "April 2025 - Present",
    role: "Senior Software Developer",
    org: "Cognizant",
    description:
      "Shipped production-ready React features, supported migration to an AWS serverless stack, and accelerated delivery using AI-assisted workflows.",
  },
  {
    year: "May 2022 - March 2025",
    role: "Full Stack Developer",
    org: "Cognizant",
    description:
      "Refactored legacy modules, built resilient APIs, and introduced test automation that improved reliability and release confidence.",
  },
  {
    year: "January 2022 - March 2022",
    role: "Intern",
    org: "Cognizant",
    description:
      "Delivered a booking platform using Flutter and React with Firebase-powered authentication and real-time updates.",
  },
  {
    year: "Graduated 2022",
    role: "Bachelors Degree in Electrical Engineering",
    org: "Veer Surendra Sai University of Technology",
    description:
      "Completed engineering degree with an 8.3 GPA, strengthening analytical thinking and structured problem solving.",
  },
];

function Experience() {
  const [scrollingDown, setScrollingDown] = useState(true);
  const [progress, setProgress] = useState(0);
  const lastY = useRef(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY.current;

      if (Math.abs(delta) > 2) {
        setScrollingDown(delta > 0);
      }

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const total = rect.height + window.innerHeight;
        const seen = window.innerHeight - rect.top;
        const value = Math.min(1, Math.max(0, seen / total));
        setProgress(value);
      }

      lastY.current = currentY;
    };

    lastY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section experience-section"
    >
      <div className="experience-scene">
        <motion.article
          className="experience-board"
          initial={{ opacity: 0.55, rotateX: -24, y: 80, scale: 0.92 }}
          animate={
            scrollingDown
              ? { opacity: 1, rotateX: 0, y: 0, z: 0, scale: 1 }
              : { opacity: 0.88, rotateX: -17, y: 28, z: -70, scale: 0.95 }
          }
          transition={{ duration: 0.62, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="experience-head">
            <span>Career Board</span>
            <h3>Experience</h3>
            <p>
              A snapshot of my journey building scalable products across teams
              and domains.
            </p>
          </div>

          <div className="experience-timeline">
            <div className="experience-progress-track" aria-hidden="true">
              <div
                className="experience-progress-fill"
                style={{ height: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <div className="experience-timeline-items">
              {timeline.map((item, index) => (
                <div
                  className={`experience-entry ${index % 2 === 0 ? "left" : "right"} ${
                    progress * timeline.length >= index + 1 ? "is-active" : ""
                  }`}
                  key={`${item.year}-${item.role}`}
                >
                  <div className="experience-dot" />
                  <div className="experience-node">
                    <span className="experience-year">{item.year}</span>
                    <h4>{item.role}</h4>
                    <p className="experience-org">{item.org}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Experience;
