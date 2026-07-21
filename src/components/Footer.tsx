import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../constants/portfolioData';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-collab glass-card">
        <div className="footer-left">
          <h4>Let&apos;s collaborate</h4>
          <p>
            Full Stack Developer focused on scalable and efficient solutions, open to freelance and
            full-time opportunities.
          </p>
        </div>
        <div className="footer-right">
          <p>Connect with me</p>
          <div className="footer-icons" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <p className="footer-copy">Copyright 2026 Asrumochan Parida. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
