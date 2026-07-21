import { motion } from 'framer-motion';
import { profile } from '../constants/portfolioData';
import { revealUp } from '../animations/variants';

function Hero() {
  return (
    <section id="home" className="section hero">
      <motion.span
        className="hero-pill"
        variants={revealUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {profile.availability}
      </motion.span>
      <motion.p variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        Hi, I&apos;m
      </motion.p>
      <motion.h1 variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {profile.name}
      </motion.h1>
      <motion.h2 variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {profile.role}
      </motion.h2>
      <motion.p
        className="hero-subtitle"
        variants={revealUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {profile.subtitle}
      </motion.p>
      <motion.ul className="hero-stack" variants={revealUp} initial="hidden" whileInView="show">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </motion.ul>
      <motion.div className="hero-actions" variants={revealUp} initial="hidden" whileInView="show">
        <a className="btn" href="#contact">
          Hire Me
        </a>
        <a className="btn btn-outline" href={profile.resume}>
          Download Resume
        </a>
      </motion.div>
      <motion.p className="hero-timezone" variants={revealUp} initial="hidden" whileInView="show">
        {profile.timezone}
      </motion.p>
    </section>
  );
}

export default Hero;
