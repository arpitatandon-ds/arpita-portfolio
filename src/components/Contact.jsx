
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const contactInfo = [
    {
      label: "arpita.tandon.ds@gmail.com",
      href: "mailto:arpita.tandon.ds@gmail.com",
    },
    {
      label: "linkedin.com/in/arpita-tandon-31b3b7267/",
      href: "https://www.linkedin.com/in/arpita-tandon-31b3b7267/",
    },
    {
      label: "github.com/arpitatandon-ds",
      href: "https://github.com/arpitatandon-ds",
    },
  ];

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

        const handleSubmit = async (e) => {
          e.preventDefault();
          setStatus("");
          setIsSending(true);

          try {
            await emailjs.send(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
              {
                name: form.name.trim(),
                email: form.email.trim(),
                message: form.message.trim(),
                title: `Portfolio message from ${form.name.trim()}`,
                time: new Date().toLocaleString(),
              },
              import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus("success");
            setForm({ name: "", email: "", message: "" });
          } catch (error) {
            console.error("EmailJS error details:", {
              status: error?.status,
              text: error?.text,
              message: error?.message,
            });

            setStatus(
              `Email error (${error?.status || "unknown"}): ${
                error?.text || error?.message || "Unknown error"
              }`
            );
    } finally {
      setIsSending(false);
    }
  };

  const inputStyle = {
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    backgroundColor: "#0b1514",
    border: "1px solid rgba(0, 245, 212, 0.2)",
    borderRadius: "0.6rem",
    padding: "0.9rem 1rem",
    color: "#e5e7eb",
    fontSize: "0.95rem",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "#00F5D4";
    e.target.style.boxShadow = "0 0 12px rgba(0,245,212,0.15)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(0,245,212,0.2)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="contact-heading-line" />
          <h2>Contact</h2>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Let's connect.</h3>
            <p className="contact-description">
              Have a project idea, an opportunity, or just want to say hello?
              Send me a message!
            </p>

            <div className="contact-links">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contact-link"
                >
                  <span>{item.label}</span>
                  <span className="contact-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              maxLength={100}
              required
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <label htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              maxLength={254}
              required
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about it..."
              value={form.message}
              onChange={handleChange}
              rows={5}
              maxLength={5000}
              required
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            {status === "success" && (
              <p className="contact-status success" role="status">
                Message sent successfully! Thank you for reaching out.
              </p>
            )}

            {status && status !== "success" && (
              <p className="contact-status error" role="alert">
                {status}
              </p>
            )}

            <button
              className="contact-submit"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message ↗"}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-section {
          width: 100%;
          box-sizing: border-box;
          padding: 2rem 1.5rem 5rem;
          background: #05080a;
          color: #e5e7eb;
          overflow: hidden;
        }

        .contact-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .contact-heading {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-bottom: 2.5rem;
        }

        .contact-heading h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 800;
        }

        .contact-heading-line {
          display: block;
          width: 4px;
          height: 2rem;
          flex-shrink: 0;
          border-radius: 4px;
          background: #00F5D4;
          box-shadow: 0 0 14px rgba(0,245,212,0.45);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          align-items: start;
          gap: clamp(2rem, 5vw, 4rem);
        }

        .contact-info,
        .contact-form {
          min-width: 0;
        }

        .contact-info h3 {
          margin: 0 0 0.8rem;
          color: #00F5D4;
          font-size: clamp(1.4rem, 3vw, 1.8rem);
        }

        .contact-description {
          margin: 0 0 1.8rem;
          max-width: 420px;
          color: #9ca3af;
          line-height: 1.8;
          font-size: 0.95rem;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 0.9rem;
        }

        .contact-link {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.7rem;
          width: 100%;
          box-sizing: border-box;
          padding: 0.85rem 0.9rem;
          border: 1px solid rgba(0,245,212,0.12);
          border-radius: 0.6rem;
          color: #9ca3af;
          text-decoration: none;
          font-family: monospace;
          font-size: 0.85rem;
          line-height: 1.6;
          overflow-wrap: anywhere;
          transition: color 0.25s ease, border-color 0.25s ease,
            background 0.25s ease, transform 0.25s ease;
        }

        .contact-link span:first-child {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .contact-link:hover {
          color: #00F5D4;
          border-color: rgba(0,245,212,0.4);
          background: rgba(0,245,212,0.035);
          transform: translateX(3px);
        }

        .contact-arrow {
          flex-shrink: 0;
          color: #00F5D4;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          padding: clamp(1rem, 3vw, 1.6rem);
          border: 1px solid rgba(0,245,212,0.13);
          border-radius: 1rem;
          background: linear-gradient(
            145deg,
            rgba(11,21,20,0.85),
            rgba(8,12,15,0.95)
          );
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }

        .contact-form label {
          margin-top: 0.35rem;
          color: #cbd5e1;
          font-size: 0.85rem;
        }

        .contact-submit {
          align-self: flex-start;
          margin-top: 0.6rem;
          padding: 0.85rem 1.4rem;
          border: none;
          border-radius: 0.6rem;
          background: linear-gradient(90deg, #00F5D4, #8b5cf6);
          color: #05080a;
          font-family: monospace;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease,
            opacity 0.2s ease;
        }

        .contact-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(0,245,212,0.25);
        }

        .contact-submit:disabled {
          cursor: not-allowed;
          opacity: 0.65;
        }

        .contact-status {
          margin: 0.35rem 0;
          font-size: 0.9rem;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .contact-status.success {
          color: #00F5D4;
        }

        .contact-status.error {
          color: #fca5a5;
        }

        @media (max-width: 900px) {
          .contact-section {
            padding-inline: 1.25rem;
          }

          .contact-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 1.5rem;
          }

          .contact-link {
            font-size: 0.78rem;
          }
        }

        @media (max-width: 680px) {
          .contact-section {
            padding: 1.5rem 1rem 3.5rem;
          }

          .contact-heading {
            margin-bottom: 1.7rem;
          }

          .contact-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 2rem;
          }

          .contact-description {
            margin-bottom: 1.2rem;
          }

          .contact-form {
            padding: 1rem;
          }

          .contact-submit {
            width: 100%;
            min-height: 46px;
          }
        }

        @media (max-width: 360px) {
          .contact-section {
            padding-inline: 0.75rem;
          }

          .contact-link {
            padding: 0.7rem;
            font-size: 0.74rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
