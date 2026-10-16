
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import diabetesImage from "../assets/Projects/diabetic_prediction.jpg";
import floodImage from "../assets/Projects/Flood_prediction.jpg";
import financeImage from "../assets/Projects/Finance_Tracker.png";

const projects = [
  {
    title: "Diabetes Prediction System",
    image: diabetesImage,
    description:
      "A machine learning web application that predicts diabetes risk from patient health parameters, with user authentication, prediction history, and downloadable PDF reports.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    highlights: [
      "ML-based prediction",
      "Prediction probability",
      "Downloadable PDF report",
    ],
    repo: "https://github.com/arpitatandon-ds/Diabetic_Predictive_Model",
    demo: "https://diabeticpredictivemodel.streamlit.app/",
  },
  {
    title: "Flood Risk Prediction System",
    image: floodImage,
    description:
      "A machine learning project designed to predict flood risk using relevant environmental and regional features.",
    tech: ["Python", "Machine Learning", "Streamlit"],
    highlights: [
      "Flood risk prediction",
      "Data-driven analysis",
      "Interactive application",
    ],
    repo: "https://github.com/arpitatandon-ds/District-level-Flood-Risk-Prediction-Systsem",
    demo: "https://district-level-flood-risk-prediction-systsem.streamlit.app/",
  },
  {
    title: "Personal Finance Tracker",
    image: financeImage,
    description:
      "A Python web application for managing personal transactions and tracking budgets and savings in one place.",
    tech: ["Python", "Flask", "HTML", "CSS"],
    highlights: [
      "Transaction management",
      "Budget tracking",
      "Personal finance overview",
    ],
    repo: "https://github.com/arpitatandon-ds/Personal-Finance-Tracker",
    demo: "https://personal-finance-tracker-wk6h.onrender.com",
  },
];

const Projects = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Move to the selected project on tablet and mobile
  const scrollToProject = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll(".project-card");
    const card = cards[index];

    if (!card) return;

    const sliderRect = slider.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const targetLeft =
      slider.scrollLeft + cardRect.left - sliderRect.left;

    slider.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const moveSlide = (direction) => {
    const nextIndex = Math.max(
      0,
      Math.min(projects.length - 1, activeIndex + direction)
    );

    scrollToProject(nextIndex);
  };

  // Update active dot when the user swipes or scrolls
  const handleSliderScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll(".project-card");
    if (!cards.length) return;

    const sliderRect = slider.getBoundingClientRect();
    const sliderCenter = sliderRect.left + sliderRect.width / 2;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(sliderCenter - cardCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  return (
    <section
      id="projects"
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "4rem 1.5rem",
        backgroundColor: "#05080a",
        overflow: "hidden",
      }}
    >
      <div
        className="projects-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "2.5rem" }}
        >
          <p
            style={{
              color: "#00F5D4",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}
          >
            MY WORK
          </p>

          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Featured <span style={{ color: "#00F5D4" }}>Projects.</span>
          </h2>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginTop: "0.8rem",
              maxWidth: "600px",
            }}
          >
            A selection of my work in machine learning, data science,
            and application development.
          </p>
        </motion.div>

        {/* Project cards */}
        <div
          ref={sliderRef}
          className="projects-grid"
          onScroll={handleSliderScroll}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={
                typeof window !== "undefined" &&
                window.matchMedia("(hover: hover)").matches
                  ? { y: -5 }
                  : {}
              }
            >
              {/* Project image */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </div>

              {/* Card content */}
              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technology chips */}
                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>
                      <span className="highlight-dot">• </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Action buttons */}
                <div className="project-actions">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-code"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Code
                  </a>

                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-demo"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Slider controls: tablet and mobile only */}
        <div className="project-slider-controls">
          <button
            type="button"
            className="slider-arrow"
            onClick={() => moveSlide(-1)}
            disabled={activeIndex === 0}
            aria-label="Previous project"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="slider-dots">
            {projects.map((project, index) => (
              <button
                type="button"
                key={project.title}
                className={`slider-dot ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => scrollToProject(index)}
                aria-label={`Go to ${project.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="slider-arrow"
            onClick={() => moveSlide(1)}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        #projects,
        #projects * {
          box-sizing: border-box;
        }

        /* Desktop: all three cards in one row */
        #projects .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.5rem;
          align-items: stretch;
          width: 100%;
        }

        #projects .project-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          border-radius: 16px;
          background: linear-gradient(145deg, #0b1514, #0a0d12);
          border: 1px solid rgba(0, 245, 212, 0.18);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        #projects .project-card:hover {
          border-color: rgba(0, 245, 212, 0.55);
          box-shadow: 0 12px 32px rgba(0, 245, 212, 0.08);
        }

        #projects .project-image {
          width: 100%;
          height: 220px;
          flex-shrink: 0;
          overflow: hidden;
          background: #0b1514;
          border-bottom: 1px solid rgba(0, 245, 212, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #projects .project-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          transition: transform 0.4s ease;
        }

        #projects .project-card:hover .project-image img {
          transform: scale(1.03);
        }

        #projects .project-content {
          padding: 1.3rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        #projects .project-content h3 {
          color: #fff;
          font-size: 1.12rem;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 0.8rem;
        }

        #projects .project-description {
          color: #9ca3af;
          font-size: 0.88rem;
          line-height: 1.7;
          margin: 0 0 1.1rem;
        }

        #projects .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.2rem;
        }

        #projects .project-tech span {
          color: #b7fff4;
          background: rgba(0, 245, 212, 0.08);
          border: 1px solid rgba(0, 245, 212, 0.18);
          border-radius: 6px;
          padding: 0.3rem 0.55rem;
          font-size: 0.72rem;
          font-weight: 600;
        }

        #projects .project-highlights {
          list-style: none;
          padding: 0;
          margin: 0 0 1.4rem;
          color: #a1a1aa;
          font-size: 0.8rem;
          line-height: 1.9;
        }

        #projects .highlight-dot {
          color: #00F5D4;
        }

        #projects .project-actions {
          display: flex;
          gap: 0.6rem;
          margin-top: auto;
        }

        #projects .project-actions a {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.65rem 0.4rem;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 600;
          transition: transform 0.2s, background 0.2s;
        }

        #projects .project-actions a:hover {
          transform: translateY(-2px);
        }

        #projects .project-code {
          border: 1px solid rgba(0, 245, 212, 0.3);
          color: #d1d5db;
          background: transparent;
        }

        #projects .project-demo {
          background: #00F5D4;
          color: #05080a;
          font-weight: 700 !important;
        }

        #projects .project-slider-controls {
          display: none;
        }

        /* Tablet: one card at a time, with carousel controls */
        @media (min-width: 601px) and (max-width: 900px) {
          #projects {
            padding: 3.5rem 1.5rem;
          }

          #projects .projects-grid {
            display: flex !important;
            flex-wrap: nowrap !important;
            gap: 1rem;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 0 0 0.5rem;
          }

          #projects .projects-grid::-webkit-scrollbar {
            display: none;
          }

          #projects .project-card {
            flex: 0 0 100% !important;
            width: 100%;
            max-width: 100%;
            scroll-snap-align: start;
            scroll-snap-stop: always;
          }

          #projects .project-image {
            height: 260px;
          }

          #projects .project-content {
            padding: 1.5rem;
          }

          #projects .project-description {
            font-size: 0.95rem;
          }

          #projects .project-slider-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.2rem;
            margin-top: 1.5rem;
          }
        }

        /* Mobile: carousel with swipe, arrows and dots */
        @media (max-width: 600px) {
          #projects {
            padding: 3rem 1rem;
          }

          #projects .projects-grid {
            display: flex !important;
            flex-wrap: nowrap !important;
            gap: 0.85rem;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 0 0 0.5rem;
          }

          #projects .projects-grid::-webkit-scrollbar {
            display: none;
          }

          #projects .project-card {
            flex: 0 0 100% !important;
            width: 100%;
            max-width: 100%;
            scroll-snap-align: start;
            scroll-snap-stop: always;
          }

          #projects .project-image {
            height: 190px;
          }

          #projects .project-content {
            padding: 1rem;
          }

          #projects .project-content h3 {
            font-size: 1.05rem;
          }

          #projects .project-description {
            font-size: 0.84rem;
          }

          #projects .project-tech {
            gap: 0.35rem;
          }

          #projects .project-tech span {
            font-size: 0.68rem;
          }

          #projects .project-actions {
            gap: 0.5rem;
          }

          #projects .project-actions a {
            font-size: 0.78rem;
          }

          #projects .project-slider-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-top: 1.2rem;
          }
        }

        /* Shared carousel controls */
        #projects .slider-arrow {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #00F5D4;
          background: rgba(0, 245, 212, 0.08);
          border: 1px solid rgba(0, 245, 212, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.2s, opacity 0.2s;
        }

        #projects .slider-arrow:hover:not(:disabled) {
          background: rgba(0, 245, 212, 0.18);
        }

        #projects .slider-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        #projects .slider-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
        }

        #projects .slider-dot {
          width: 8px;
          height: 8px;
          padding: 0;
          border: none;
          border-radius: 999px;
          background: #4b5563;
          cursor: pointer;
          transition: width 0.25s, background 0.25s;
        }

        #projects .slider-dot.active {
          width: 24px;
          background: #00F5D4;
        }

        @media (prefers-reduced-motion: reduce) {
          #projects .projects-grid {
            scroll-behavior: auto;
          }

          #projects .project-image img,
          #projects .project-actions a {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
