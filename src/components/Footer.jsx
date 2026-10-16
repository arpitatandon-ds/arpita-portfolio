
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      label: "GitHub",
      icon: FaGithub,
      href: "https://github.com/arpitatandon-ds",
    },
    {
      label: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/arpita-tandon-31b3b7267/",
    },
  ];

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        {/* Brand */}
        <motion.a
          href="#home"
          className="footer-brand"
          whileHover={{ y: -2 }}
          aria-label="Back to home"
        >
          <span className="footer-brand-mark">A</span>
          <span>
            Arpita<span className="footer-brand-accent">.</span>
          </span>
        </motion.a>

        <p className="footer-tagline">
          Turning data into insights and ideas into impact.
        </p>

        {/* Navigation */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social links */}
        <div className="footer-socials">
          {socials.map(({ label, icon: Icon, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${label} profile`}
              title={label}
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="footer-social-link"
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Arpita Tandon. All rights reserved.
          </p>

          <a className="footer-back-top" href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>

      <style>{`
        .portfolio-footer {
          width: 100%;
          box-sizing: border-box;
          padding: 3.5rem 1.5rem 1.5rem;
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(0, 245, 212, 0.045),
              transparent 65%
            ),
            #05080a;
          border-top: 1px solid rgba(0, 245, 212, 0.14);
          color: #e5e7eb;
          overflow: hidden;
        }

        .footer-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          color: #f9fafb;
          font-size: 1.45rem;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .footer-brand-mark {
          display: grid;
          place-items: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 0.65rem;
          color: #05080a;
          background: linear-gradient(135deg, #00f5d4, #8b5cf6);
          font-size: 1.2rem;
          box-shadow: 0 0 20px rgba(0, 245, 212, 0.12);
        }

        .footer-brand-accent {
          color: #00f5d4;
        }

        .footer-tagline {
          max-width: 100%;
          margin: -0.5rem 0 0;
          color: #9ca3af;
          font-size: 0.9rem;
          line-height: 1.7;
          text-align: center;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.65rem 2rem;
          margin: 0.5rem 0;
        }

        .footer-nav a {
          color: #9ca3af;
          font-family: monospace;
          font-size: 0.88rem;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footer-nav a:hover,
        .footer-back-top:hover {
          color: #00f5d4;
        }

        .footer-socials {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          min-height: 2.8rem;
          padding: 0.7rem 1.1rem;
          box-sizing: border-box;
          border: 1px solid rgba(0, 245, 212, 0.17);
          border-radius: 0.7rem;
          background: rgba(11, 21, 20, 0.55);
          color: #cbd5e1;
          font-size: 0.9rem;
          text-decoration: none;
          transition:
            color 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .footer-social-link svg {
          font-size: 1.15rem;
          flex-shrink: 0;
        }

        .footer-social-link:hover {
          color: #00f5d4;
          border-color: rgba(0, 245, 212, 0.65);
          background: rgba(0, 245, 212, 0.045);
          box-shadow: 0 0 18px rgba(0, 245, 212, 0.08);
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          margin-top: 0.5rem;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 245, 212, 0.22),
            transparent
          );
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          width: 100%;
        }

        .footer-bottom p {
          margin: 0;
          color: #6b7280;
          font-family: monospace;
          font-size: 0.76rem;
          line-height: 1.7;
        }

        .footer-back-top {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          flex-shrink: 0;
          color: #9ca3af;
          font-family: monospace;
          font-size: 0.8rem;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footer-back-top span {
          color: #00f5d4;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .portfolio-footer {
            padding: 3rem 1.25rem 1.25rem;
          }

          .footer-nav {
            gap: 1rem 1.4rem;
          }

          .footer-bottom {
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .portfolio-footer {
            padding: 2.5rem 1rem 1.25rem;
          }

          .footer-container {
            gap: 1.25rem;
          }

          .footer-tagline {
            max-width: 290px;
            font-size: 0.84rem;
          }

          .footer-nav {
            gap: 1rem 1.15rem;
          }

          .footer-nav a {
            font-size: 0.82rem;
          }

          .footer-social-link {
            padding: 0.7rem 0.9rem;
          }

          .footer-bottom {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            gap: 0.8rem;
          }

          .footer-bottom p {
            font-size: 0.72rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-nav a,
          .footer-social-link,
          .footer-back-top {
            transition: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
