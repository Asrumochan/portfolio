import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFileDownload, FaPaperPlane } from "react-icons/fa";
import profilePhoto from "../assets/1000150033.jpg";
import { profile } from "../constants/portfolioData";
import { revealUp } from "../animations/variants";
import Button from "./ui/Button";

const techPhrases = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "REST APIs",
];

function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhraseIndex((prev: number) => (prev + 1) % techPhrases.length);
    }, 1800);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="section hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.p
            className="hero-greeting"
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Hi, I&apos;m <span className="wave">👋</span>
          </motion.p>
          <motion.h1
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {profile.name}
          </motion.h1>
          <motion.h2
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {profile.role}
          </motion.h2>
          <motion.p
            className="hero-typing"
            variants={revealUp}
            initial="hidden"
            whileInView="show"
          >
            Building with{" "}
            <span key={techPhrases[phraseIndex]}>
              {techPhrases[phraseIndex]}
            </span>
          </motion.p>
          <motion.p
            className="hero-subtitle"
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {profile.subtitle}
          </motion.p>
          <motion.div
            className="hero-actions"
            variants={revealUp}
            initial="hidden"
            whileInView="show"
          >
            <Button href="#get-in-touch" icon={<FaPaperPlane />}>
              Hire Me
            </Button>
            <Button
              href={profile.resume}
              variant="ghost"
              icon={<FaFileDownload />}
            >
              Download CV
            </Button>
          </motion.div>
          <motion.p
            className="hero-timezone"
            variants={revealUp}
            initial="hidden"
            whileInView="show"
          >
            {profile.timezone}
          </motion.p>
        </div>

        <motion.figure
          className="hero-photo-card"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            src={profilePhoto}
            alt="Profile photo"
            className="hero-photo"
            loading="eager"
          />
        </motion.figure>
      </div>
    </section>
  );
}

export default Hero;
