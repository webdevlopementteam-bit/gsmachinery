"use client";

import { useEffect, useState } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import { submitEnquiry, OPEN_ENQUIRY_EVENT } from "@/lib/web3forms";

const AUTO_OPEN_DELAY = 8000;
const SEEN_KEY = "gs_enquiry_popup_seen";

const emptyForm = { name: "", phone: "", email: "", message: "" };

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#232831] focus:outline-none focus:border-[#b99631] focus:ring-1 focus:ring-[#b99631] transition-colors duration-300";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    const show = () => {
      setStatus("idle");
      setOpen(true);
    };
    window.addEventListener(OPEN_ENQUIRY_EVENT, show);

    // Auto-open once per browser session
    let timer;
    try {
      if (!sessionStorage.getItem(SEEN_KEY)) {
        timer = setTimeout(() => {
          sessionStorage.setItem(SEEN_KEY, "1");
          show();
        }, AUTO_OPEN_DELAY);
      }
    } catch {}

    return () => {
      window.removeEventListener(OPEN_ENQUIRY_EVENT, show);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const ok = await submitEnquiry(form, "Popup Form");
      if (ok) {
        setStatus("success");
        setForm(emptyForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 px-4"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-popup-title"
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#232831] px-6 sm:px-8 py-6 rounded-t-2xl">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#b99631] transition-colors duration-300"
          >
            <FaTimes size={14} />
          </button>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b99631] mb-2">
            Get a Quote
          </p>
          <h2
            id="enquiry-popup-title"
            className="text-[22px] sm:text-[26px] font-extrabold text-white leading-tight"
          >
            Enquire Now for the Best Price
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Tell us your bottle size and daily production target.
          </p>
        </div>

        <div className="px-6 sm:px-8 py-6">
          {status === "success" && (
            <div className="mb-5 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
              Thank you! Your enquiry has been received — our team will get
              back to you shortly.
            </div>
          )}
          {status === "error" && (
            <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              Something went wrong. Please try again or call us at +91
              8588966670.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Requirement
              </label>
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Bottle size, daily production target..."
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#b99631] hover:bg-[#232831] disabled:opacity-60 text-white font-semibold uppercase tracking-wide text-sm px-8 py-3 rounded transition-colors duration-300"
            >
              {status === "sending" ? "Sending..." : "Send Enquiry"}
              <FaPaperPlane size={13} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
