"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact_form");
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (

  <form className="contact-form-validated contact-one__form" onSubmit={handleSubmit} style={{ textAlign: isRtl ? 'right' : 'left' }}>
    <div className="row">
        <div className="col-xl-6 col-lg-6">
            <h4 className="contact-one__input-title">{t("name")}</h4>
            <div className="contact-one__input-box">
                <div className="contact-one__input-icon">
                  <span className="icon-user-1"></span>
                </div>
                <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t("placeholders.name")}
                style={{ textAlign: isRtl ? 'right' : 'left' }}
                />
            </div>
        </div>
        <div className="col-xl-6 col-lg-6">
            <h4 className="contact-one__input-title">{t("email")}</h4>
            <div className="contact-one__input-box">
                <div className="contact-one__input-icon">
                    <span className="icon-email"></span>
                </div>
                <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t("placeholders.email")}
                style={{ textAlign: isRtl ? 'right' : 'left' }}
                />
            </div>
        </div>
        <div className="col-xl-6 col-lg-6">
            <h4 className="contact-one__input-title">{t("phone")}</h4>
            <div className="contact-one__input-box">
                <div className="contact-one__input-icon">
                    <span className="icon-phone-call"></span>
                </div>
                <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("placeholders.phone")}
                style={{ direction: 'ltr', textAlign: isRtl ? 'right' : 'left' }}
                />
            </div>
        </div>
        <div className="col-xl-6 col-lg-6">
            <h4 className="contact-one__input-title">{t("subject")}</h4>
            <div className="contact-one__input-box">
              <div className="contact-one__input-icon">
                  <span className="icon-edit"></span>
              </div>
                <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("placeholders.subject")}
                style={{ textAlign: isRtl ? 'right' : 'left' }}
                />
            </div>
        </div>
    </div>
    <div className="col-xl-12">
        <h4 className="contact-one__input-title">{t("message")}</h4>
        <div className="contact-one__input-box text-message-box">
            <div className="contact-one__input-icon">
                <span className="icon-edit"></span>
            </div>
            <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder={t("placeholders.message")}
            style={{ textAlign: isRtl ? 'right' : 'left' }}
            />
        </div>
        <div className="contact-one__btn-box">
            <button type="submit" className="thm-btn">
                <span>{t("submit")}</span>
                <i className="icon-right-arrow" style={{ transform: isRtl ? 'scaleX(-1)' : 'none', display: 'inline-block' }}></i>
            </button>
        </div>
    </div>

    {status === "loading" && <p>{t("sending")}</p>}
    {status === "success" && <p>{t("success")}</p>}
    {status === "error" && <p>{t("error")}</p>}
  </form>
  );
}
