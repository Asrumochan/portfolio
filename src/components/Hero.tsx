import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaFileDownload, FaPaperPlane } from "react-icons/fa";
import profilePhoto from "../assets/PXL_20260126_101507672.jpg";
import resumePdf from "../assets/ASRUMOCHAN_4_FULL_STACK.pdf";
import { profile } from "../constants/portfolioData";
import { revealUp } from "../animations/variants";
import Button from "./ui/Button";

const scrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function Hero() {
  const [displayName, setDisplayName] = useState(profile.name);
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const scrambleTimerRef = useRef<number | null>(null);

  useEffect(() => {
    let index = 0;
    const target = profile.subtitle;
    const typeTimer = window.setInterval(() => {
      index += 1;
      setTypedSubtitle(target.slice(0, index));

      if (index >= target.length) {
        window.clearInterval(typeTimer);
      }
    }, 24);

    return () => window.clearInterval(typeTimer);
  }, []);

  useEffect(() => {
    return () => {
      if (scrambleTimerRef.current) {
        window.clearInterval(scrambleTimerRef.current);
      }
    };
  }, []);

  const runNameScramble = () => {
    if (scrambleTimerRef.current) {
      window.clearInterval(scrambleTimerRef.current);
    }

    const target = profile.name;
    let iteration = 0;

    scrambleTimerRef.current = window.setInterval(() => {
      const nextText = target
        .split("")
        .map((character, index) => {
          if (character === " ") {
            return " ";
          }

          if (index < iteration) {
            return target[index];
          }

          return scrambleCharacters[
            Math.floor(Math.random() * scrambleCharacters.length)
          ];
        })
        .join("");

      setDisplayName(nextText);
      iteration += 0.45;

      if (iteration >= target.length) {
        if (scrambleTimerRef.current) {
          window.clearInterval(scrambleTimerRef.current);
        }
        setDisplayName(target);
      }
    }, 34);
  };

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
            Hi <span className="wave">👋</span>, I&apos;m
          </motion.p>
          <motion.h1
            className="hero-name"
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onMouseEnter={runNameScramble}
          >
            {displayName}
          </motion.h1>
          <motion.p
            className="hero-subtitle hero-subtitle-typed"
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {typedSubtitle}
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
            <Button href={resumePdf} variant="ghost" icon={<FaFileDownload />}>
              Download CV
            </Button>
          </motion.div>
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
