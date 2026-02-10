"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Send, CheckCircle, Loader2 } from "lucide-react";

interface ApplyModalProps {
  open: boolean;
  onClose: () => void;
}

const COURSES = [
  "B.Tech CSE",
  "B.Tech AI & ML",
  "B.Tech Data Science",
  "B.Tech Mechanical",
  "B.Tech Civil",
  "B.Tech ECE",
  "B.Pharma",
  "BCA",
  "BBA",
  "MBA",
  "BSc (Hons) Agriculture",
];

type FormState = "idle" | "submitting" | "success" | "error";

function ApplyModalContent({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    state: "",
    message: "",
  });

  // Focus first input on mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => firstInputRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const body = new URLSearchParams({
        "form-name": "apply-now",
        ...formData,
      });

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          state: "",
          message: "",
        });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Apply Now"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-rose-600 to-rose-700 px-6 py-5 text-white">
          <h2 className="text-xl font-bold">Apply Now</h2>
          <p className="mt-1 text-sm text-rose-100">
            Fill in your details and we&apos;ll get back to you shortly.
          </p>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-white/80 transition hover:bg-white/20 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
          {formState === "success" ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle className="h-14 w-14 text-green-500" />
              <h3 className="text-lg font-semibold text-slate-900">
                Application Submitted!
              </h3>
              <p className="text-sm text-slate-600">
                Thank you for your interest in Shivalik College. Our admissions
                team will contact you within 24–48 hours.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 rounded-full bg-rose-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form-name" value="apply-now" />

              {/* Name */}
              <div>
                <label
                  htmlFor="apply-name"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="apply-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="apply-email"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Email <span className="text-rose-500">*</span>
                </label>
                <input
                  id="apply-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="apply-phone"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  id="apply-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              {/* Course */}
              <div>
                <label
                  htmlFor="apply-course"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Interested Course <span className="text-rose-500">*</span>
                </label>
                <select
                  id="apply-course"
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                >
                  <option value="">Select a course</option>
                  {COURSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* State */}
              <div>
                <label
                  htmlFor="apply-state"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  State / City
                </label>
                <input
                  id="apply-state"
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="e.g. Dehradun, Uttarakhand"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="apply-message"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="apply-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any questions or additional information..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none"
                />
              </div>

              {formState === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-700 disabled:opacity-60"
              >
                {formState === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ApplyModal({ open, onClose }: ApplyModalProps) {
  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <ApplyModalContent onClose={onClose} />,
    document.body
  );
}
