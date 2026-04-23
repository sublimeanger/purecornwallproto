import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

const initial: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consent: false,
};

const SUBJECTS = [
  "Booking enquiry",
  "General question",
  "Become an owner",
  "Press",
  "Other",
];

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 11,
  fontWeight: 500,
  color: "#6fb6ae",
  letterSpacing: 3,
  textTransform: "uppercase",
  marginBottom: 6,
  display: "block",
};

const baseInputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 0",
  border: "none",
  borderBottom: "1.5px solid #e5e0da",
  background: "transparent",
  fontFamily: "var(--font-body)",
  fontSize: 16,
  fontWeight: 400,
  color: "#2f5550",
  outline: "none",
  transition: "border-color 200ms ease",
};

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 12,
  color: "#b8553e",
  marginTop: 4,
};

const ContactForm = () => {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormValues>(key: K, val: FormValues[K]) => {
    setValues((v) => ({ ...v, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) e.name = "Please enter your name";
    if (!values.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Please enter a valid email";
    if (!values.subject) e.subject = "Please select a subject";
    if (!values.message.trim()) e.message = "Please enter a message";
    if (!values.consent) e.consent = "Please tick to consent";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact-form" style={{ background: "#ffffff", padding: "6vw 0" }}>
      <div className="pc-container">
        <div style={{ textAlign: "center", marginBottom: submitted ? 0 : 48 }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 500,
              color: "#6fb6ae",
              letterSpacing: 3,
              textTransform: "uppercase",
              margin: 0,
              marginBottom: 18,
            }}
          >
            {submitted ? "THANK YOU" : "WRITE TO US"}
          </p>
          <h2
            style={{
              fontFamily: submitted ? "var(--font-serif)" : "var(--font-body)",
              fontSize: submitted ? "clamp(28px, 2.4vw, 36px)" : "clamp(24px, 2.2vw, 32px)",
              fontWeight: submitted ? 400 : 500,
              color: "#2f5550",
              letterSpacing: submitted ? 0 : 3,
              textTransform: submitted ? "none" : "uppercase",
              margin: 0,
            }}
          >
            {submitted ? "Your message is on its way" : "SEND US A MESSAGE"}
          </h2>
          <div
            style={{
              width: 200,
              height: 2,
              backgroundColor: "#d3a36e",
              marginTop: 25,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          {!submitted && (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                fontWeight: 400,
                color: "#7a7a7a",
                margin: "20px auto 0",
                maxWidth: 540,
                lineHeight: 1.6,
              }}
            >
              We typically respond within one working day. For urgent matters, please use phone or email.
            </p>
          )}
        </div>

        {submitted ? (
          <div style={{ maxWidth: 540, margin: "32px auto 0", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "#3a3a3a",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              We've received your message and will respond within one working day. Keep an eye on
              your inbox — or if you sent this from a mobile, your messages folder.
            </p>
            <button
              type="button"
              onClick={reset}
              style={{
                marginTop: 32,
                background: "#d3a36e",
                color: "#ffffff",
                padding: "16px 42px",
                border: "none",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} style={{ maxWidth: 680, margin: "0 auto" }} noValidate>
            <div style={{ marginBottom: 24 }}>
              <label htmlFor="cf-name" style={labelStyle}>NAME</label>
              <input
                id="cf-name"
                type="text"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                style={{
                  ...baseInputStyle,
                  borderBottomColor: errors.name ? "#b8553e" : "#e5e0da",
                }}
                onFocus={(e) => {
                  if (!errors.name) e.currentTarget.style.borderBottomColor = "#d3a36e";
                  e.currentTarget.style.borderBottomWidth = "2px";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderBottomColor = errors.name ? "#b8553e" : "#e5e0da";
                  e.currentTarget.style.borderBottomWidth = "1.5px";
                }}
              />
              {errors.name && <p style={errorStyle}>{errors.name}</p>}
            </div>

            <div style={{ marginBottom: 24 }}>
              <label htmlFor="cf-email" style={labelStyle}>EMAIL</label>
              <input
                id="cf-email"
                type="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                style={{
                  ...baseInputStyle,
                  borderBottomColor: errors.email ? "#b8553e" : "#e5e0da",
                }}
              />
              {errors.email && <p style={errorStyle}>{errors.email}</p>}
            </div>

            <div style={{ marginBottom: 24 }}>
              <label htmlFor="cf-phone" style={labelStyle}>PHONE (OPTIONAL)</label>
              <input
                id="cf-phone"
                type="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                style={baseInputStyle}
              />
            </div>

            <div style={{ marginBottom: 24, position: "relative" }}>
              <label htmlFor="cf-subject" style={labelStyle}>SUBJECT</label>
              <select
                id="cf-subject"
                value={values.subject}
                onChange={(e) => update("subject", e.target.value)}
                style={{
                  ...baseInputStyle,
                  appearance: "none",
                  WebkitAppearance: "none",
                  paddingRight: 28,
                  borderBottomColor: errors.subject ? "#b8553e" : "#e5e0da",
                  cursor: "pointer",
                }}
              >
                <option value="">Select a subject…</option>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown
                size={16}
                color="#6fb6ae"
                style={{ position: "absolute", right: 0, top: 38, pointerEvents: "none" }}
              />
              {errors.subject && <p style={errorStyle}>{errors.subject}</p>}
            </div>

            <div style={{ marginBottom: 24 }}>
              <label htmlFor="cf-message" style={labelStyle}>MESSAGE</label>
              <textarea
                id="cf-message"
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                style={{
                  ...baseInputStyle,
                  padding: 12,
                  minHeight: 160,
                  resize: "vertical",
                  borderBottomColor: errors.message ? "#b8553e" : "#e5e0da",
                }}
              />
              {errors.message && <p style={errorStyle}>{errors.message}</p>}
            </div>

            <div style={{ marginBottom: 24, display: "flex", alignItems: "flex-start", gap: 12 }}>
              <input
                id="cf-consent"
                type="checkbox"
                checked={values.consent}
                onChange={(e) => update("consent", e.target.checked)}
                style={{
                  width: 18,
                  height: 18,
                  marginTop: 2,
                  accentColor: "#6fb6ae",
                  flexShrink: 0,
                  cursor: "pointer",
                }}
              />
              <label
                htmlFor="cf-consent"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#3a3a3a",
                  lineHeight: 1.5,
                  cursor: "pointer",
                }}
              >
                I consent to Pure Cornwall storing my message and contact details to respond to this
                enquiry. We won't share your information or add you to marketing lists.
              </label>
            </div>
            {errors.consent && (
              <p style={{ ...errorStyle, marginTop: -16, marginBottom: 16, marginLeft: 30 }}>
                {errors.consent}
              </p>
            )}

            <button
              type="submit"
              style={{
                marginTop: 24,
                background: "#d3a36e",
                color: "#ffffff",
                padding: "16px 42px",
                border: "none",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              SEND MESSAGE →
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
