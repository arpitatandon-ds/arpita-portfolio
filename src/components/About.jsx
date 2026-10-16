
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaCertificate,
  FaProjectDiagram,
} from "react-icons/fa";
import profileImg from "../assets/Arpita.png";

const About = () => {
  const stats = [
    { icon: <FaProjectDiagram />, number: "5+", title: "Projects Completed" },
    { icon: <FaCode />, number: "15+", title: "Technologies" },
    { icon: <FaCertificate />, number: "10+", title: "Certifications" },
    { icon: <FaDatabase />, number: "1+", title: "Years Learning" },
  ];

  const glassCard = {
    backgroundColor: "rgba(11, 21, 20, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(0, 245, 212, 0.15)",
  };

  return (
    <section
      id="about"
      style={{
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem)",
        backgroundColor: "#05080a",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          left: "2.5rem",
          top: "5rem",
          width: "18rem",
          height: "18rem",
          maxWidth: "80vw",
          backgroundColor: "#00F5D4",
          opacity: 0.1,
          filter: "blur(150px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="about-container">
        {/* LEFT SIDE: Profile Image */}
        <motion.div
          className="about-image-column"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="about-image-frame">
            <div className="about-image-inner-border" />
            <img
              src={profileImg}
              alt="Arpita's profile"
              className="about-profile-image"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE: About Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="about-eyebrow">About Me</p>

          <h2 className="about-heading">
            Building Intelligent Solutions With{" "}
            <span className="about-gradient-text">
              Data &amp; Technology
            </span>
          </h2>

          <p className="about-description">
            I am a passionate Data Science student and Full Stack Developer
            specializing in Machine Learning, Python, Data Analytics and
            modern web technologies. I love transforming ideas into
            intelligent, data-driven applications.
          </p>

          {/* STATS */}
          <div className="about-stats">
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                className="about-stat-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={glassCard}
              >
                <div className="about-stat-top">
                  <span className="about-stat-icon">{item.icon}</span>
                  <h3>{item.number}</h3>
                </div>

                <p>{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        #about,
        #about * {
          box-sizing: border-box;
        }

        .about-container {
          position: relative;
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }

        /* Profile image */
        .about-image-column {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .about-image-frame {
          position: relative;
          width: min(100%, 350px);
          aspect-ratio: 1 / 1;
          border-radius: 2rem;
          background: rgba(11, 21, 20, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 245, 212, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 60px rgba(0, 245, 212, 0.18);
        }

        .about-image-inner-border {
          position: absolute;
          inset: 7%;
          border-radius: 1.5rem;
          border: 1px solid rgba(0, 245, 212, 0.3);
          pointer-events: none;
        }

        .about-profile-image {
          position: relative;
          z-index: 1;
          width: 80%;
          height: 80%;
          object-fit: cover;
          object-position: center;
          border-radius: 10%;
        }

        /* About content */
        .about-content {
          min-width: 0;
          width: 100%;
        }

        .about-eyebrow {
          color: #00F5D4;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-family: monospace;
          margin: 0 0 1rem;
        }

        .about-heading {
          color: #fff;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          line-height: 1.2;
          overflow-wrap: break-word;
          margin: 0;
        }

        .about-gradient-text {
          background: linear-gradient(90deg, #00F5D4 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 25px rgba(0, 245, 212, 0.2);
        }

        .about-description {
          margin: 1.5rem 0 0;
          color: #9ca3af;
          font-size: 1rem;
          line-height: 1.8;
          max-width: 36rem;
          text-align: left;
        }

        /* Stats */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.9rem;
          margin-top: 2rem;
        }

        .about-stat-card {
          min-width: 0;
          padding: 1rem;
          border-radius: 0.85rem;
          cursor: default;
          transition:
            box-shadow 0.3s ease,
            border-color 0.3s ease,
            background-color 0.3s ease;
        }

        .about-stat-card:hover {
          box-shadow:
            0 8px 25px rgba(0, 245, 212, 0.15),
            0 0 15px rgba(0, 245, 212, 0.08);
          border-color: rgba(0, 245, 212, 0.5) !important;
        }

        .about-stat-top {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          min-width: 0;
        }

        .about-stat-icon {
          color: #00F5D4;
          font-size: 1.15rem;
          display: flex;
          flex-shrink: 0;
        }

        .about-stat-top h3 {
          color: #fff;
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
        }

        .about-stat-card > p {
          color: #9ca3af;
          font-size: 0.8rem;
          line-height: 1.5;
          margin: 0.45rem 0 0;
          overflow-wrap: anywhere;
        }

        /* Tablet: 768 × 1024 and similar sizes */
        @media (min-width: 601px) and (max-width: 900px) {
          .about-container {
            grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
            gap: 1.75rem;
          }

          .about-image-frame {
            width: 100%;
            max-width: 290px;
            border-radius: 1.5rem;
          }

          .about-heading {
            font-size: clamp(1.65rem, 3.2vw, 2rem);
          }

          .about-description {
            font-size: 0.95rem;
            line-height: 1.75;
            margin-top: 1.2rem;
          }

          .about-stats {
            gap: 0.7rem;
            margin-top: 1.5rem;
          }

          .about-stat-card {
            padding: 0.85rem;
          }

          .about-stat-top h3 {
            font-size: 1.25rem;
          }

          .about-stat-card > p {
            font-size: 0.76rem;
          }
        }

        /* Mobile: image above text */
        @media (max-width: 600px) {
          .about-container {
            grid-template-columns: minmax(0, 1fr);
            gap: 2rem;
          }

          .about-image-frame {
            width: min(72vw, 270px);
            border-radius: 1.5rem;
          }

          .about-image-inner-border {
            border-radius: 1.1rem;
          }

          .about-content {
            text-align: left;
          }

          .about-eyebrow {
            font-size: 0.78rem;
            margin-bottom: 0.8rem;
          }

          .about-heading {
            font-size: clamp(1.7rem, 7vw, 2.15rem);
            line-height: 1.25;
          }

          .about-description {
            font-size: 0.93rem;
            line-height: 1.75;
            margin-top: 1.2rem;
          }

          .about-stats {
            gap: 0.7rem;
            margin-top: 1.5rem;
          }

          .about-stat-card {
            padding: 0.85rem 0.75rem;
            border-radius: 0.75rem;
          }

          .about-stat-top {
            gap: 0.45rem;
          }

          .about-stat-icon {
            font-size: 1rem;
          }

          .about-stat-top h3 {
            font-size: 1.2rem;
          }

          .about-stat-card > p {
            font-size: 0.74rem;
          }
        }

        /* Very narrow phones */
        @media (max-width: 360px) {
          .about-stats {
            grid-template-columns: minmax(0, 1fr);
          }

          .about-stat-card {
            padding: 0.9rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-stat-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
