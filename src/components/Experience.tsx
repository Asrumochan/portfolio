import { motion } from "framer-motion";
import experiencePhoto from "../assets/1000150033.jpg";

const timeline = [
  {
    year: "Nov 2023 - Present",
    role: "Full Stack Developer",
    org: "Mercedes-Benz Research and Development",
    description:
      "Delivered a React app to production, migrated to AWS serverless architecture, and improved team velocity with GitHub Copilot.",
  },
  {
    year: "Jul 2022 - Nov 2023",
    role: "Full Stack Developer",
    org: "Incture Technologies",
    description:
      "Modernized legacy systems, shipped scalable APIs, and implemented automated testing that improved reliability and performance.",
  },
  {
    year: "May 2021 - Dec 2021",
    role: "Freelance Project: Prayas Booking App",
    org: "Self-Employed",
    description:
      "Built a booking app with Flutter and React, integrating Firebase for real-time notifications and secure authentication.",
  },
  {
    year: "Graduated 2022",
    role: "Bachelors Degree in Electrical Engineering",
    org: "Veer Surendra Sai University of Technology",
    description:
      "Graduated with an 8.3 GPA and built strong foundations in problem solving, systems thinking, and engineering discipline.",
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="experience-scene">
        <motion.article
          className="experience-board"
          initial={{ opacity: 0.55, rotateX: -24, y: 80, scale: 0.92 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="experience-head">
            <span>Career Board</span>
            <h3>Experience</h3>
            <p>From analyst foundations to full-stack execution.</p>
          </div>

          <div className="experience-visual">
            <img
              src={experiencePhoto}
              alt="Professional experience highlight"
            />
          </div>

          <div className="experience-timeline">
            {timeline.map((item, index) => (
              <div
                className={`experience-entry ${index % 2 === 0 ? "left" : "right"}`}
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
        </motion.article>
      </div>
    </section>
  );
}

export default Experience;
