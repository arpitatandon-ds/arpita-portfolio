import { motion } from "framer-motion";
import AWS_Certificate from '../assets/Certificates/AWS-certificate.jpeg';
import AWS_badge from "../assets/Certificates/aws-certified-badge.png";
import PBI_Certificate from "../assets/Certificates/microsoft-certificate.jpeg";
import PBI_badge from "../assets/Certificates/microsoft-certified-badge.png";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issued: "Oct 2025",
      validThrough: "Oct 2028",
      credentialUrl: AWS_Certificate,
      badge: "AWS",
      badgeImage: AWS_badge,
    },
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      issued: "Apr 2026",
      validThrough: "Apr 2027",
      credentialUrl: PBI_Certificate,
      badge: "PL",
      badgeImage: PBI_badge,
    },
  ];

  return (
    <section
      id="certifications"
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "1.25rem 1.5rem",
        backgroundColor: "#05080a",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
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
            marginBottom: "2.5rem",
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
            Certifications
          </h2>
        </motion.div>

        {/* Certificate cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                flex: "1 1 320px",
                backgroundColor: "#0b1514",
                border: "1px solid rgba(0, 245, 212, 0.15)",
                borderRadius: "0.75rem",
                padding: "1.5rem 1.75rem",
                boxShadow: "0 0 15px rgba(0,245,212,0.06)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 245, 212, 0.6)";
                e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(0,245,212,0.2)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 245, 212, 0.15)";
                e.currentTarget.style.boxShadow =
                  "0 0 15px rgba(0,245,212,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  marginBottom: "0.9rem",
                }}
              >
                {/* Badge */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flexShrink: 0,
                    width: "42px",
                    height: "42px",
                    borderRadius: cert.badgeImage ? "0.4rem" : "50%",
                    backgroundColor: cert.badgeImage
                      ? "transparent"
                      : "rgba(0, 245, 212, 0.08)",
                    border: cert.badgeImage
                      ? "none"
                      : "1px solid rgba(0, 245, 212, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00F5D4",
                    fontFamily: "monospace",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    boxShadow: cert.badgeImage
                      ? "none"
                      : "0 0 10px rgba(0,245,212,0.15)",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.boxShadow =
                      "0 0 16px rgba(0,245,212,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = cert.badgeImage
                      ? "none"
                      : "0 0 10px rgba(0,245,212,0.15)";
                  }}
                >
                  {cert.badgeImage ? (
                    <img
                      src={cert.badgeImage}
                      alt={`${cert.title} badge`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    cert.badge
                  )}
                </a>

                <div>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    style={{
                      color: "#6b7280",
                      fontFamily: "monospace",
                      fontSize: "0.8rem",
                      margin: 0,
                    }}
                  >
                    Issued {cert.issued}{" "}
                    <span style={{ opacity: 0.6 }}>·</span> Valid through{" "}
                    {cert.validThrough}
                  </p>
                </div>
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#00F5D4",
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                view certificate ↗
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;