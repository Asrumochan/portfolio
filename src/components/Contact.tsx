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
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const fromName = (
      form.elements.namedItem("from_name") as HTMLInputElement | null
    )?.value?.trim();
    const fromEmail = (
      form.elements.namedItem("from_email") as HTMLInputElement | null
    )?.value?.trim();
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement | null
    )?.value?.trim();

    if (!fromName || !fromEmail || !message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage(
        `EmailJS is not configured for this deployment. Missing values: ${
          [
            !serviceId ? "serviceId" : "",
            !templateId ? "templateId" : "",
            !publicKey ? "publicKey" : "",
          ]
            .filter(Boolean)
            .join(", ") || "unknown"
        }.`,
      );
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: fromName,
          from_email: fromEmail,
          name: fromName,
          email: fromEmail,
          user_name: fromName,
          user_email: fromEmail,
          message,
          reply_to: fromEmail,
        },
        {
          publicKey,
        },
      );
      form.reset();
      setStatus("success");
      setErrorMessage("");
    } catch (error) {
      console.error("EmailJS send failed", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "The message could not be sent. Please try again later.",
      );
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
            name="from_name"
            type="text"
            placeholder="Your name"
            required
          />
          <input
            name="from_email"
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
              {errorMessage ||
                `Add EmailJS env keys or contact me directly at ${profile.email}.`}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
