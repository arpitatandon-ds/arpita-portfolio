import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certifications",
    "Achievements",
    "Contact",
  ];

  const glassCard = {
    backgroundColor: "rgba(11, 21, 20, 0.85)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(0, 245, 212, 0.18)",
  };

  const closeMenu = () => setMenuOpen(false);

  const linkStyle = {
    color: "#d1d5db",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "color 0.25s ease",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    padding: "0.65rem 1.1rem",
    border: "none",
    borderRadius: "9999px",
    background: "linear-gradient(90deg, #00F5D4 0%, #8b5cf6 100%)",
    color: "#05080a",
    fontWeight: 700,
    fontSize: "0.9rem",
    whiteSpace: "nowrap",
    textDecoration: "none",
    cursor: "pointer",
    boxSizing: "border-box",
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="navbar-glass"
        style={{
          ...glassCard,
          position: "fixed",
          top: "1rem",
          left: "0",
          right: "0",
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: 1000,
          width: "calc(100% - 2rem)",
          maxWidth: "1200px",
          boxSizing: "border-box",
          padding: "0.7rem 1.25rem",
          borderRadius: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* LOGO */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Arpita Tandon Home"
          style={{
            fontSize: "1.7rem",
            fontWeight: 800,
            letterSpacing: "0.05em",
            background:
              "linear-gradient(90deg, #00F5D4 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          AT
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="navbar-menu">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={linkStyle}
              onClick={closeMenu}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00F5D4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#d1d5db";
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="navbar-cta"
          style={buttonStyle}
          onClick={closeMenu}
        >
          Let's Talk <ArrowUpRight size={16} />
        </a>

        {/* HAMBURGER BUTTON */}
        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* MOBILE MENU — OUTSIDE NAVBAR */}
      {menuOpen && (
        <motion.div
          id="mobile-navigation"
          className="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.025 }}
              style={linkStyle}
            >
              {item}
              <ArrowUpRight size={16} color="#00F5D4" />
            </motion.a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mobile-talk"
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </motion.div>
      )}

      {/* RESPONSIVE STYLES */}
      <style>{`
        .navbar-menu {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.5rem, 1vw, 0.9rem);
          flex: 1;
          min-width: 0;
          font-size: clamp(0.7rem, 0.85vw, 0.88rem);
        }

        .navbar-cta {
          flex-shrink: 0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .navbar-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 18px rgba(0, 245, 212, 0.3);
        }

        .navbar-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border: 1px solid rgba(0, 245, 212, 0.3);
          border-radius: 12px;
          background: rgba(0, 245, 212, 0.08);
          color: #00F5D4;
          cursor: pointer;
          position: relative;
          z-index: 1002;
        }

        .mobile-menu {
          position: fixed;
          top: 5.5rem;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          width: calc(100% - 2rem);
          max-width: 1200px;
          max-height: calc(100vh - 7rem);
          overflow-y: auto;
          padding: 1rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          border-radius: 1.25rem;
          background: rgba(5, 12, 13, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 245, 212, 0.25);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          z-index: 1001;
        }

        .mobile-menu > a:not(.mobile-talk) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.85rem 0.5rem;
          border-bottom: 1px solid rgba(0, 245, 212, 0.1);
        }

        .mobile-menu > a:not(.mobile-talk):hover {
          color: #00F5D4 !important;
        }

        .mobile-menu .mobile-talk {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          margin-top: 0.7rem;
          padding: 0.8rem 1rem;
          border: none;
          border-radius: 9999px;
          background: linear-gradient(90deg, #00F5D4, #8b5cf6);
          color: #05080a;
          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 1100px) {
          .navbar-menu,
          .navbar-cta {
            display: none !important;
          }

          .navbar-toggle {
            display: inline-flex !important;
          }
        }

        @media (max-width: 480px) {
          .navbar-glass {
            top: 0.75rem !important;
            width: calc(100% - 1.25rem) !important;
            padding: 0.6rem 0.9rem !important;
            border-radius: 1.2rem !important;
          }

          .mobile-menu {
            top: 4.8rem;
            width: calc(100% - 1.25rem);
            padding: 0.8rem;
            border-radius: 1.2rem;
            max-height: calc(100vh - 6rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-cta {
            transition: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;