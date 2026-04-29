import React, { useState } from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    // Add Web3Forms access key
    data.append("access_key", "11f779f5-fe36-44b1-ac1f-912cd8703945");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.header}>
        <h1 className="sectionTitle">Contact</h1>
        <div className="accent-line" />
        <p className="sectionSubtitle">Let's work together — get in touch</p>
      </div>

      <div className={styles.inner}>
        {/* Left — contact info */}
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Reach me at</h3>
          <a href="mailto:chelladurai@example.com" className={styles.infoLink}>
            <span className={styles.infoIcon}>✉</span>
            chelladuraisub@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/chelladurai-yabase-a-8a5037257"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoLink}
          >
            <span className={styles.infoIcon}>in</span>
            LinkedIn
          </a>
          <a
            href="https://github.com/yabase001"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoLink}
          >
            <span className={styles.infoIcon}>GH</span>
            GitHub
          </a>
        </div>

        {/* Right — form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="What would you like to say?"
              required
            />
          </div>

          <button
            type="submit"
            className={`btn ${styles.submitBtn}`}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message ✉"}
          </button>

          {status === "success" && (
            <p className={styles.successMsg}>
              ✅ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
