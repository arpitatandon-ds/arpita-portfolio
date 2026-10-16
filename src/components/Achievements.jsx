import { motion } from "framer-motion";
import XTechnica from "../assets/Certificates/X-Technica_Hackathon.jpg";
import Padmavyuh from "../assets/Certificates/Padmavyuh_Hackathon.jpg";
import RecentTech from "../assets/Certificates/RecentEmergingTechno_Volunteer.jpg";
import Lakshagraha from "../assets/Certificates/Lakshagrah_Hackathon.jpg";
import ReactTraining from "../assets/Certificates/ReactJs_Training.jpg";
import PosterCompetition from "../assets/Certificates/Poster_Competition.jpg";
import YogaVolunteer from "../assets/Certificates/YogaDay_Volunteer.jpg";
import DrugAbuse from "../assets/Certificates/DrugAbusePoster_Competition.jpg";

const achievements = [
  {
    title: "X Technica Hackathon",
    organization: "IEEE Student Chapter, DBUU",
    role: "Certificate of Participation · September 2024",
    certificateUrl: XTechnica,  },
  {
    title: "Padmavyuh Hackathon 3.0",
    organization: "DBUU",
    role: "Certificate of Participation · October 2024",
    certificateUrl: Padmavyuh,
  },
  {
    title: "International Symposium — Recent Trends in Emerging Technologies 4.0",
    organization: "DBUU",
    role: "Student Participant · November 2024",
    certificateUrl: RecentTech,
  },
  {
    title: "Lakshagraha Hackathon 4.0",
    organization: "DBUU",
    role: "Certificate of Participation · April 2025",
    certificateUrl: Lakshagraha,
  },
  {
    title: "React JS Training",
    organization: "Dev Infotech",
    role: "Training Completion Certificate · April–May 2024",
    certificateUrl: ReactTraining,
  },
  {
    title: "Poster Competition",
    organization: "Omkarananda Institute of Management & Technology",
    role: "Third position in poster competition · 9 November 2023",
    certificateUrl: PosterCompetition,
  },
  {
    title: "International Yoga Day — Student Volunteer",
    organization: "Omkarananda Institute of Management & Technology",
    role: "Student Volunteer · 21 June 2023",
    certificateUrl: YogaVolunteer,
  },
  {
    title: "Drug Abuse and Illicit Trafficking — Poster Competition",
    organization: "Omkarananda Institute of Management & Technology",
    role: "Third position in poster-making competition",
    certificateUrl: DrugAbuse,
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "1.25rem 1.5rem",
        backgroundColor: "#05080a",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: "1.5rem" }}
        >
          <p
            style={{
              color: "#00F5D4",
              fontSize: "0.75rem",
              fontFamily: "monospace",
              letterSpacing: "0.15em",
              margin: "0 0 0.5rem",
              textTransform: "uppercase",
            }}
          >
            Events, Training & Recognition
          </p>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#fff", margin: 0 }}>
            Achievements<span style={{ color: "#00F5D4" }}>.</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1rem",
          }}
        >
          {achievements.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              style={{
                padding: "1.25rem",
                borderRadius: "12px",
                background: "linear-gradient(145deg, #0b1514, #080d0d)",
                border: "1px solid rgba(0,245,212,0.15)",
                boxShadow: "0 0 15px rgba(0,245,212,0.04)",
                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,245,212,0.55)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,245,212,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,245,212,0.15)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0,245,212,0.04)";
              }}
            >
              <div style={{ color: "#00F5D4", fontSize: "0.75rem", fontFamily: "monospace", marginBottom: "0.8rem" }}>
                {String(index + 1).padStart(2, "0")} / ACHIEVEMENT
              </div>
              <h3 style={{ color: "#fff", fontSize: "1.02rem", lineHeight: 1.5, margin: "0 0 0.45rem" }}>
                {item.title}
              </h3>
              <p style={{ color: "#9ca3af", fontSize: "0.85rem", margin: "0 0 0.55rem", lineHeight: 1.6 }}>
                {item.organization}
              </p>
              <p style={{ color: "#b7c5c3", fontSize: "0.8rem", margin: "0 0 1rem", lineHeight: 1.6 }}>
                {item.role}
              </p>
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00F5D4", fontFamily: "monospace", fontSize: "0.8rem", textDecoration: "none" }}
              >
                View Certificate ↗
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
