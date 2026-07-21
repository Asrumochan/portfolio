import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../constants/portfolioData";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

type Status = "idle" | "success" | "error";

function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="get-in-touch" className="section contact-section">
      <h3 className="contact-title">Get in Touch</h3>
      <p className="contact-lead">
        Have a project in mind or want to collaborate? Let&apos;s connect.
      </p>
      <div className="contact-grid">
        <div className="glass-card contact-card">
          <p>Email: {profile.email}</p>
          <p>
            LinkedIn: <a href={profile.linkedin}>Profile</a>
          </p>
          <p>
            GitHub: <a href={profile.github}>Profile</a>
          </p>
          <p>
            Resume: <a href={profile.resume}>Download</a>
          </p>
        </div>

        <form className="glass-card form contact-form" onSubmit={onSubmit}>
          <input
            name="user_name"
            type="text"
            placeholder="Your name"
            required
          />
          <input
            name="user_email"
            type="email"
            placeholder="Your email"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project"
            required
          />
          <button className="btn" type="submit">
            Send Message
          </button>
          {status === "success" && (
            <p className="status-ok">Message sent successfully.</p>
          )}
          {status === "error" && (
            <p className="status-error">
              Add EmailJS env keys or contact me directly at {profile.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
