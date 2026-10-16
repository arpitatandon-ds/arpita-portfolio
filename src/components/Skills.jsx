import { motion } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiJupyter,
  SiStreamlit,
} from "react-icons/si";
import { FaChartBar, FaDatabase, FaBrain, FaCode, FaCss3Alt, FaJava } from "react-icons/fa";

const categories = [
  {
    title: "Programming Languages",
    accent: "#ec4ecb",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    title: "AI/ML Frameworks",
    accent: "#ec4ecb",
    skills: [
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Machine Learning", icon: FaBrain },
    ],
  },
  {
    title: "Data & Visualization",
    accent: "#ec4ecb",
    skills: [
      { name: "Power BI", icon: FaChartBar },
      { name: "Data Visualization", icon: FaChartBar },
      { name: "Statistics", icon: FaDatabase },
      { name: "Database Management", icon: FaDatabase },
    ],
  },
  {
    title: "Tools & Platforms",
    accent: "#ec4ecb",
    skills: [
      { name: "Git & GitHub", icon: SiGithub },
      { name: "Jupyter Notebook", icon: SiJupyter },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "VS Code", icon: FaCode },
    ],
  },
  {
    title: "Backend Development",
    accent: "#ec4ecb",
    skills: [
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs", icon: FaCode },
    ],
  },
  {
    title: "Web Technologies",
    accent: "#ec4ecb",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <p className="skills-eyebrow">MY TECH STACK</p>
          <h2>Technologies I Work With</h2>
          <p className="skills-subtitle">
            Tools and technologies I use to turn ideas into intelligent solutions.
          </p>
        </motion.div>

        <div className="skills-grid">
          {categories.map((category, index) => (
            <motion.article
              className="skills-card"
              key={category.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <h3>{category.title}</h3>

              <div className="skills-list">
                {category.skills.map(({ name, icon: Icon }, skillIndex) => (
                  <motion.div
                    className="skill-chip"
                    key={name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.04 }}
                    viewport={{ once: true }}
                  >
                    <span className="skill-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="skill-name">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          padding: 2rem 1.5rem;
          color: #f5f7f8;
          background:
            radial-gradient(ellipse at 12% 12%, rgba(0, 245, 212, 0.07), transparent 38%),
            radial-gradient(ellipse at 88% 85%, rgba(99, 102, 241, 0.07), transparent 36%),
            #0C0C0C;
        }

        .skills-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
        }

        .skills-heading {
          margin-bottom: 1.25rem;
          text-align: center;
        }

        .skills-eyebrow {
          margin: 0 0 0.65rem;
          color: #00f5d4;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .skills-heading h2 {
          margin: 0;
          color: #f8fafc;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 800;
          line-height: 1.2;
        }

        .skills-subtitle {
          max-width: 600px;
          margin: 0.8rem auto 0;
          color: #a1a1aa;
          font-size: 0.98rem;
          line-height: 1.7;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .skills-card {
          min-width: 0;
          padding: 1.4rem;
          border: 1px solid rgba(0, 245, 212, 0.16);
          border-radius: 1rem;
          background: linear-gradient(145deg, rgba(19, 22, 24, 0.96), rgba(12, 12, 12, 0.96));
          box-shadow: 0 12px 34px rgba(0, 0, 0, 0.2);
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skills-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 245, 212, 0.48);
          box-shadow: 0 14px 34px rgba(0, 245, 212, 0.07);
        }

        .skills-card h3 {
          margin: 0 0 1.15rem;
          color: #f5f7f8;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.01em;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          max-width: 100%;
          padding: 0.65rem 0.8rem;
          border: 1px solid rgba(148, 163, 184, 0.17);
          border-radius: 0.7rem;
          background: rgba(255, 255, 255, 0.025);
          color: #d4d4d8;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }

        .skill-chip:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 245, 212, 0.5);
          background: rgba(0, 245, 212, 0.07);
          color: #ffffff;
        }

        .skill-icon {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          color: #00f5d4;
          font-size: 1rem;
        }

        .skill-name {
          overflow-wrap: anywhere;
          font-size: 0.82rem;
          font-weight: 500;
          line-height: 1.3;
        }

        @media (max-width: 680px) {
          .skills-section { padding: 1.5rem 1.1rem; }
          .skills-grid { grid-template-columns: minmax(0, 1fr); gap: 1rem; }
          .skills-card { padding: 1.2rem; }
          .skills-heading { margin-bottom: 1rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-card, .skill-chip { transition: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
