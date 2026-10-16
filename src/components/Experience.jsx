import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      duration: "Jan 2026 — Jun 2026",
      mode: "Remote",
      role: "Backend Developer Intern, Meta Scifor Technologies",
      points: [
        "Developing backend services for a multi-tenant Gym B2B2C SaaS platform using FastAPI and PostgreSQL with gym_id-based tenant isolation across client organizations",
        "Implementing JWT-based authentication with 5-level role-based access control (RBAC) to secure multi-tenant operations",
        "Built an ACID-compliant POS transaction module and a QR-code based attendance tracking system",
        "Integrating real-time WebSocket-based live chat and Razorpay payment gateway for subscription billing",
        "Using Docker for containerized deployment and Redis/Celery for background task processing",
      ],
    },
    {
      duration: "Jun 2025 — Sep 2025",
      mode: "Remote",
      role: "Python Developer Trainee, Meta Scifor Technologies",
      points: [
        "Completed structured training in core Python concepts including OOP, file handling, and exception handling",
        "Performed data preprocessing and exploratory analysis using Pandas and NumPy",
        "Built and evaluated Machine Learning models for classification and prediction tasks",
      ],
    },
  ];

  return (
    <section
      id="experience"
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "1.25rem 1.5rem",
        backgroundColor: "#05080a",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", width: "100%" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.9rem",
            marginBottom: "3.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 800,
              color: "#fff",
              margin: 0,
            }}
          >
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* vertical line */}
          <div
            style={{
              position: "absolute",
              left: "6px",
              top: "8px",
              bottom: "8px",
              width: "2px",
              background:
                "linear-gradient(180deg, #00F5D4 0%, rgba(0,245,212,0.15) 100%)",
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                position: "relative",
                marginBottom:
                  index === experiences.length - 1 ? 0 : "3.5rem",
              }}
            >
              {/* dot */}
              <span
                style={{
                  position: "absolute",
                  left: "-2rem",
                  top: "6px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: "#0b1514",
                  border: "2px solid #00F5D4",
                  boxShadow: "0 0 12px rgba(0,245,212,0.6)",
                }}
              />

              <p
                style={{
                  color: "#00F5D4",
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  marginBottom: "0.5rem",
                }}
              >
                {exp.duration} <span style={{ opacity: 0.6 }}>·</span>{" "}
                {exp.mode}
              </p>

              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.9rem",
                }}
              >
                {exp.role}
              </h3>

              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.6rem",
                      color: "#9ca3af",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: "#00F5D4", flexShrink: 0 }}>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;