import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "Apr 2025 – Present",
    role: "Senior Software Developer",
    org: "Cognizant",
    description:
      "Building and enhancing enterprise React applications, developing scalable frontend solutions, integrating REST APIs, and contributing to cloud-native deployments and AI-assisted development workflows.",
  },
  {
    year: "May 2022 – Mar 2025",
    role: "Full Stack Developer",
    org: "Cognizant",
    description:
      "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Built reusable UI components, developed REST APIs, optimized application performance, and collaborated with cross-functional teams to deliver enterprise solutions.",
  },
  {
    year: "Jan 2022 – Mar 2022",
    role: "Web Development Trainee",
    org: "Cognizant",
    description:
      "Built a strong foundation in web development by creating small-scale applications with HTML, CSS, JavaScript, and React. Focused on responsive design, reusable components, API integration, and modern frontend development best practices.",
  },
  {
    year: "2022",
    role: "B.Tech in Electrical Engineering",
    org: "Veer Surendra Sai University of Technology (VSSUT), Burla",
    description:
      "Graduated with an 7.64 CGPA, building a strong foundation in analytical thinking, software development, and problem-solving.",
  },
];

function Experience() {
  const [scrollingDown, setScrollingDown] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 820 : false,
  );
  const lastY = useRef(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
            isMobile
              ? { opacity: 1, rotateX: 0, y: 0, z: 0, scale: 1 }
              : scrollingDown
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
                    !isMobile && progress * timeline.length >= index + 1
                      ? "is-active"
                      : ""
                  }`}
                  key={`${item.year}-${item.role}`}
                >
                  <div className="experience-dot" />
                  <div className="experience-node">
                    <span className="experience-year">{item.year}</span>
                    <h4>{item.role}</h4>
                    <p className="experience-org">{item.org}</p>
                    <p className="experience-description">{item.description}</p>
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
