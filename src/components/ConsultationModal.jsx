"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

export default function ConsultationModal({
  isOpen,
  onClose,
  displayPhone = "9039946410",
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setError("");
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.overflowY = "";
      document.body.style.overflowY = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setError("");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in required fields: Full Name, Email Address, and Your Message.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to save your details. Please try again.");
      }

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2200);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="consult-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-modal-title"
    >
      <div className="consult-modal-card">
        <div className="consult-modal-header">
          <div>
            <span className="consult-modal-badge">📞 Book Your Consultation Call</span>
            <h2 id="consult-modal-title" className="consult-modal-title">
              Connect With Our Consultant
            </h2>
            <p className="consult-modal-subtitle">
              Fill in your details below to connect directly on <strong>{displayPhone}</strong>.
            </p>
          </div>
          <button
            type="button"
            className="consult-modal-close"
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="consult-modal-form">
          {error && <div className="consult-modal-error">{error}</div>}
          {submitted && (
            <div className="consult-modal-success">
              <CheckCircle size={18} />
              <span>Submitted successfully! Our consultant will connect with you shortly.</span>
            </div>
          )}

          <div className="consult-field">
            <label htmlFor="consult-fullName">Full Name *</label>
            <input
              id="consult-fullName"
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="consult-field-grid">
            <div className="consult-field">
              <label htmlFor="consult-email">Email Address *</label>
              <input
                id="consult-email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="consult-field">
              <label htmlFor="consult-phone">Phone Number</label>
              <input
                id="consult-phone"
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="consult-field">
            <label htmlFor="consult-message">Your Message *</label>
            <textarea
              id="consult-message"
              name="message"
              rows={4}
              placeholder="Tell us how we can help you..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="consult-submit-btn"
            disabled={isSubmitting || submitted}
          >
            {isSubmitting ? (
              <>
                <span className="consult-spinner" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      <style jsx>{`
        .consult-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          overflow-y: auto;
        }

        .consult-modal-card {
          width: 100%;
          max-width: 520px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.35);
          overflow: hidden;
          animation: consultModalIn 0.22s ease-out;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
        }

        .consult-modal-header {
          background: linear-gradient(135deg, #1b355e 0%, #36a852 100%);
          color: #ffffff;
          padding: 20px 24px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .consult-modal-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.2);
          margin-bottom: 8px;
        }

        .consult-modal-title {
          margin: 0;
          font-size: 22px;
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
        }

        .consult-modal-subtitle {
          margin: 6px 0 0;
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.92);
        }

        .consult-modal-close {
          background: rgba(255, 255, 255, 0.18);
          border: none;
          color: #ffffff;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }

        .consult-modal-close:hover {
          background: rgba(255, 255, 255, 0.32);
        }

        .consult-modal-form {
          padding: 22px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-y: auto;
        }

        .consult-modal-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #b91c1c;
          font-size: 13.5px;
          font-weight: 600;
          padding: 10px 14px;
          border-radius: 10px;
        }

        .consult-modal-success {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
          font-size: 13.5px;
          font-weight: 600;
          padding: 10px 14px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .consult-field-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .consult-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .consult-field label {
          font-size: 13.5px;
          font-weight: 600;
          color: #374151;
        }

        .consult-field input,
        .consult-field textarea {
          width: 100%;
          padding: 11px 14px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 14.5px;
          color: #111827;
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
          font-family: inherit;
        }

        .consult-field textarea {
          resize: vertical;
          min-height: 92px;
        }

        .consult-field input:focus,
        .consult-field textarea:focus {
          border-color: #36a852;
        }

        .consult-submit-btn {
          width: 100%;
          padding: 13px 20px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #36a852 0%, #15803d 100%);
          color: #ffffff;
          font-size: 15.5px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(54, 168, 82, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .consult-submit-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 12px 26px rgba(54, 168, 82, 0.45);
        }

        .consult-submit-btn:disabled {
          opacity: 0.72;
          cursor: not-allowed;
        }

        .consult-spinner {
          width: 18px;
          height: 18px;
          border: 2.5px solid #ffffff;
          border-top-color: transparent;
          border-radius: 50%;
          animation: consultSpin 0.8s linear infinite;
        }

        @keyframes consultModalIn {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes consultSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 560px) {
          .consult-modal-header {
            padding: 16px 18px;
          }

          .consult-modal-title {
            font-size: 19px;
          }

          .consult-modal-form {
            padding: 16px 18px 20px;
            gap: 12px;
          }

          .consult-field-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

