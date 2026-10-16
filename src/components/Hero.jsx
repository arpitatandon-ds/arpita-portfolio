
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Zap } from "lucide-react";
import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";
import { FaChartBar, FaDatabase } from "react-icons/fa";

import Particles from "./Particles";
import dataVisualization from "../assets/data_visualization_logo.jpg";
import Resume from "../assets/ArpitaTandon(Resume).pdf";

const Hero = () => {
  // Typewriter Effect
  const roles = [
    "Data Analyst",
    "Full Stack Developer",
    "Data Scientist",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Floating Technology Cards
  const technologies = [
    { name: "Python", icon: <SiPython /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "Machine Learning", icon: <SiScikitlearn /> },
    { name: "Data Visualization", icon: <FaChartBar /> },
    { name: "Power BI", icon: <FaChartBar /> },
    { name: "SQL", icon: <FaDatabase /> },
  ];

  const positions = [
    { top: "10px", left: "65px" },
    { top: "4rem", right: "-20px" },
    { top: "50%", left: "-50px" },
    { top: "50%", right: "-50px" },
    { bottom: "5rem", left: "-20px" },
    { bottom: "4rem", right: "-20px" },
    { bottom: "-20px", left: "50%", transform: "translateX(-50%)" },
  ];

  // AI Icon Data
  const aiIcons = [
    { Icon: Brain, label: "Artificial Intelligence" },
    { Icon: Cpu, label: "Machine Learning" },
    { Icon: Zap, label: "Deep Learning" },
  ];

  // Typewriter Logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = isDeleting ? 55 : 110;

    if (!isDeleting && text === currentRole) {
      delay = 1200;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text === currentRole) {
          setIsDeleting(true);
        } else {
          setText(currentRole.substring(0, text.length + 1));
        }
      } else if (text.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section">
      <Particles />

      {/* Background Glow */}
      <div className="hero-background-glow" />

      {/* Main Two-Column Layout */}
      <div className="hero-grid">
        {/* LEFT SECTION */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Typewriter */}
          <p className="hero-role">
            {text}
            <span className="hero-cursor">|</span>
          </p>

          {/* Name */}
          <h1 className="hero-title">
            Hello, I'm
            <br />
            <span className="hero-name">
              {"Arpita Tandon".split("").map((letter, index) => (
                <span
                  className="name-letter"
                  key={`${letter}-${index}`}
                  style={{
                    "--letter-delay": `${index * 0.07}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            I transform data into intelligent solutions and build modern web
            experiences using AI, Machine Learning, and Full Stack
            technologies.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button
              className="hero-button hero-button-primary"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </button>

            {/* View Resume */}
            <a
              className="hero-button hero-button-secondary"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="hero-orb">
            <div className="hero-ring hero-ring-outer" />
            <div className="hero-ring hero-ring-inner" />
            <div className="hero-orb-glow" />

            {/* Image Core */}
            <div className="hero-core">
              <img
                src={dataVisualization}
                alt="Data visualization and analytics"
                className="hero-core-image"
              />
            </div>

            {/* Floating Technology Cards */}
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="tech-card"
                style={positions[index]}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + (index % 3) * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.18,
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 24px rgba(0,245,212,0.3)",
                }}
              >
                <span className="tech-card-icon">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI ICONS — BOTTOM CENTER */}
      <div className="ai-icon-row" aria-label="AI technologies">
        {aiIcons.map(({ Icon, label }, index) => (
          <motion.div
            className="ai-icon-circle"
            key={label}
            title={label}
            aria-label={label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            whileHover={{
              y: -5,
              scale: 1.1,
              boxShadow: "0 0 25px rgba(0,245,212,0.28)",
            }}
          >
            <motion.div
              className="ai-icon-inner"
              animate={{ rotateY: [0, 180, 360] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                delay: index * 0.35,
              }}
            >
              <Icon size={28} strokeWidth={1.8} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          overflow: hidden;
          padding: 7.5rem 1.5rem 6.5rem;
          background: #05080a;
          isolation: isolate;
        }

        .hero-background-glow {
          position: absolute;
          z-index: -1;
          top: 8rem;
          right: 5rem;
          width: 24rem;
          height: 24rem;
          background: #00f5d4;
          opacity: 0.13;
          filter: blur(130px);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 3rem;
          align-items: center;
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
        }

        .hero-content {
          width: 100%;
          max-width: 36rem;
          min-width: 0;
        }

        .hero-role {
          min-height: 1.5rem;
          margin: 0 0 1.5rem;
          color: #00f5d4;
          font-family: monospace;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .hero-cursor {
          display: inline-block;
          margin-left: 0.25rem;
          animation: hero-blink 1s step-start infinite;
        }

        .hero-title {
          position: relative;
          z-index: 2;
          margin: 0;
          color: #ffffff;
          font-size: clamp(2.4rem, 4.5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.2;
        }

        .hero-name {
          display: inline-block;
          max-width: 100%;
          overflow-wrap: anywhere;
          position: relative;
          z-index: 2;
          opacity: 1;
          color: #00f5d4;
          -webkit-text-fill-color: initial;
        }

        .name-letter {
          display: inline-block;
          white-space: pre;
          color: #00f5d4;
          background: linear-gradient(90deg, #00f5d4, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transform-origin: center center;
          transform-style: preserve-3d;
          animation: arpita-letter-flip 0.8s ease-in-out both;
          animation-delay: var(--letter-delay, 0s);
          transition: filter 0.3s ease;
          backface-visibility: visible;
        }

        .name-letter:hover {
          animation: arpita-letter-hover 0.6s ease-in-out both;
          filter: drop-shadow(0 0 8px rgba(0,245,212,0.8));
        }

        .hero-description {
          max-width: 32rem;
          margin: 1.25rem 0 0;
          color: #9ca3af;
          font-size: 1.05rem;
          line-height: 1.8;
          text-align: justify;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 2.9rem;
          box-sizing: border-box;
          padding: 0.8rem 1.5rem;
          border-radius: 9999px;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .hero-button:hover {
          transform: translateY(-3px);
        }

        .hero-button-primary {
          color: #05080a;
          border: none;
          background: linear-gradient(90deg, #00f5d4, #8b5cf6);
        }

        .hero-button-primary:hover {
          box-shadow: 0 0 25px rgba(0,245,212,0.35);
        }

        .hero-button-secondary {
          color: #e5e7eb;
          background: rgba(11,21,20,0.6);
          border: 1px solid rgba(0,245,212,0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .hero-button-secondary:hover {
          border-color: #00f5d4;
          box-shadow: 0 0 18px rgba(0,245,212,0.12);
        }

        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .hero-orb {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 360px;
          height: 360px;
          flex-shrink: 0;
          border-radius: 50%;
        }

        .hero-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-ring-outer {
          inset: 0;
          border: 1px solid rgba(0,245,212,0.3);
          animation: hero-spin 12s linear infinite;
        }

        .hero-ring-inner {
          inset: 24px;
          border: 1px dashed rgba(0,245,212,0.4);
          animation: hero-spin-reverse 8s linear infinite;
        }

        .hero-orb-glow {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: #00f5d4;
          opacity: 0.18;
          filter: blur(48px);
          pointer-events: none;
        }

        .hero-core {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 240px;
          height: 240px;
          overflow: hidden;
          border: 2px solid rgba(0,245,212,0.65);
          border-radius: 50%;
          background: radial-gradient(
            circle,
            #123b35 0%,
            #07110f 70%,
            #000 100%
          );
          box-shadow:
            0 0 35px rgba(0,245,212,0.25),
            inset 0 0 30px rgba(0,245,212,0.12);
        }

        .hero-core-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          animation: hero-bounce 3s ease-in-out infinite;
          filter: drop-shadow(0 0 15px rgba(0,245,212,0.4));
        }

        .tech-card {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1rem;
          color: #00f5d4;
          border: 1px solid rgba(0,245,212,0.15);
          border-radius: 1rem;
          background: rgba(11,21,20,0.78);
          box-shadow: 0 0 20px rgba(0,245,212,0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          font-size: 0.82rem;
          font-weight: 500;
          white-space: nowrap;
          cursor: default;
          will-change: transform;
        }

        .tech-card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .ai-icon-row {
          position: absolute;
          z-index: 5;
          left: 50%;
          bottom: 1.5rem;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          gap: 1.4rem;
          width: max-content;
          max-width: calc(100% - 2rem);
          transform: translateX(-50%);
          perspective: 800px;
        }

        .ai-icon-circle {
          display: flex;
          flex: 0 0 62px;
          align-items: center;
          justify-content: center;
          width: 62px;
          height: 62px;
          box-sizing: border-box;
          color: #00f5d4;
          border: 1px solid rgba(0,245,212,0.4);
          border-radius: 50%;
          background: rgba(0,245,212,0.08);
          box-shadow: 0 0 18px rgba(0,245,212,0.12);
          transform-style: preserve-3d;
          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .ai-icon-circle:hover {
          background: rgba(0,245,212,0.15);
          border-color: #00f5d4;
          box-shadow: 0 0 25px rgba(0,245,212,0.3);
        }

        .ai-icon-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          backface-visibility: visible;
        }

        @keyframes arpita-letter-flip {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }

        @keyframes arpita-letter-hover {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }

        @keyframes hero-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes hero-spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes hero-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes hero-blink {
          50% { opacity: 0; }
        }

        @media (min-width: 681px) and (max-width: 900px) {
          .hero-section {
            min-height: 100vh;
            padding: 7.5rem 2rem 7rem;
          }

          .hero-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 2.5rem;
            margin: auto 0;
          }

          .hero-content {
            max-width: 680px;
            margin: 0 auto;
            text-align: center;
          }

          .hero-role {
            margin-bottom: 1rem;
          }

          .hero-title {
            font-size: clamp(2.5rem, 5.5vw, 3.5rem);
          }

          .hero-description {
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-visual {
            width: 100%;
            margin: 0 auto;
          }

          .hero-orb {
            width: min(310px, 68vw);
            height: min(310px, 68vw);
          }

          .hero-core {
            width: 66%;
            height: 66%;
          }

          .tech-card {
            padding: 0.55rem 0.7rem;
            font-size: 0.7rem;
          }

          .hero-orb .tech-card:nth-of-type(5) {
            top: 0 !important;
            left: 8px !important;
          }

          .hero-orb .tech-card:nth-of-type(6) {
            top: 18% !important;
            right: 0 !important;
          }

          .hero-orb .tech-card:nth-of-type(7) {
            top: 50% !important;
            left: 0 !important;
          }

          .hero-orb .tech-card:nth-of-type(8) {
            top: 50% !important;
            right: 0 !important;
          }

          .hero-orb .tech-card:nth-of-type(9) {
            bottom: 18% !important;
            left: 0 !important;
          }

          .hero-orb .tech-card:nth-of-type(10) {
            bottom: 15% !important;
            right: 0 !important;
          }

          .hero-orb .tech-card:nth-of-type(11) {
            bottom: 0 !important;
            left: 50% !important;
          }
        }

        @media (max-width: 680px) {
          .hero-section {
            min-height: 100vh;
            padding: 7rem 1.25rem 6.5rem;
            width: 100%;
          }

          .hero-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 3rem;
            margin: auto 0;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-title {
            font-size: clamp(2.4rem, 9vw, 3.4rem);
          }

          .hero-description {
            text-align: left;
          }

          .hero-visual {
            margin: 0 auto;
            width: 100%;
          }

          .hero-orb {
            width: min(300px, 78vw);
            height: min(300px, 78vw);
          }

          .hero-core {
            width: 66%;
            height: 66%;
          }

          .hero-ring-inner {
            inset: 18px;
          }

          .tech-card {
            gap: 0.35rem;
            padding: 0.5rem 0.6rem;
            font-size: 0.68rem;
          }

          .tech-card-icon {
            font-size: 1rem;
          }

          .ai-icon-row {
            bottom: 1.1rem;
            gap: 1rem;
          }

          .ai-icon-circle {
            width: 54px;
            height: 54px;
            flex-basis: 54px;
          }
        }

        @media (max-width: 380px) {
          .hero-section {
            padding-right: 1rem;
            padding-left: 1rem;
          }

          .hero-buttons {
            gap: 0.75rem;
            justify-content: flex-start;
          }

          .hero-button {
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
          }

          .tech-card {
            padding: 0.4rem 0.5rem;
            font-size: 0.62rem;
          }

          .ai-icon-row {
            gap: 0.75rem;
          }

          .ai-icon-circle {
            width: 48px;
            height: 48px;
            flex-basis: 48px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-ring,
          .hero-core-image,
          .name-letter,
          .hero-cursor {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
