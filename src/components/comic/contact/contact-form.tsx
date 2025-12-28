"use client";

import { motion } from "framer-motion";
import type { ChangeEvent, FormEvent } from "react";

// Assuming these are correctly imported from your project structure
import GdgLogoIcon from "@/components/gdg-logo-icon";
import { GOOGLE_COLORS } from "./constants";
import type { ContactFormData, ContactFormErrors } from "./types";

type ContactFormProps = {
  formData: ContactFormData;
  errors: ContactFormErrors;
  touched: Record<keyof ContactFormData, boolean>;
  isHovering: boolean;
  isSubmitting: boolean; // Prop to track submission status
  onHoverChange: (hovering: boolean) => void;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: (e: FormEvent) => void;
};

export default function ContactForm({
  formData,
  errors,
  touched,
  isHovering,
  isSubmitting,
  onHoverChange,
  onInputChange,
  onSubmit,
}: ContactFormProps) {
  const nameError = touched.name ? errors.name : undefined;
  const emailError = touched.email ? errors.email : undefined;
  const messageError = touched.message ? errors.message : undefined;

  // The form can be submitted only if there are no errors and it's not currently submitting.
  const canSubmit = !nameError && !emailError && !messageError && !isSubmitting;

  return (
    <div className="relative rounded-2xl border-4 border-gray-800 bg-white p-8 shadow-[8px_8px_0_0_#1f2937]">
      <div className="absolute -top-6 -left-6 rounded-full border-4 border-gray-800 bg-white p-2 shadow-[4px_4px_0_0_#1f2937]">
        <GdgLogoIcon />
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* --- ADDED: Hidden inputs for FormSubmit.co configuration --- */}
        {/* This is a fallback redirect for non-JS users. Our AJAX call handles the success state. */}
        <input
          type="hidden"
          name="_next"
          value="https://your-website.com/thank-you"
        />
        {/* Optional: Disable the reCAPTCHA challenge. Not recommended for production. */}
        <input type="hidden" name="_captcha" value="false" />

        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            placeholder="Your Name"
            required
            aria-invalid={Boolean(nameError)}
            aria-describedby={nameError ? "contact-name-error" : undefined}
            className="w-full rounded-lg border-4 bg-white p-4 text-lg font-semibold text-gray-900 placeholder-gray-500 focus:ring-4 focus:outline-none"
            style={{
              borderColor: nameError ? GOOGLE_COLORS.red : GOOGLE_COLORS.blue,
              boxShadow: "4px 4px 0px #000",
            }}
          />
          {nameError && (
            <p
              id="contact-name-error"
              className="mt-2 text-sm font-semibold text-red-700"
            >
              {nameError}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            placeholder="Your Email"
            required
            aria-invalid={Boolean(emailError)}
            aria-describedby={emailError ? "contact-email-error" : undefined}
            className="w-full rounded-lg border-4 bg-white p-4 text-lg font-semibold text-gray-900 placeholder-gray-500 focus:ring-4 focus:outline-none"
            style={{
              borderColor: emailError ? GOOGLE_COLORS.red : GOOGLE_COLORS.red,
              boxShadow: "4px 4px 0px #000",
            }}
          />
          {emailError && (
            <p
              id="contact-email-error"
              className="mt-2 text-sm font-semibold text-red-700"
            >
              {emailError}
            </p>
          )}
        </div>

        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={onInputChange}
            placeholder="Ayo any doubts just DM us"
            required
            rows={6}
            aria-invalid={Boolean(messageError)}
            aria-describedby={
              messageError ? "contact-message-error" : undefined
            }
            className="w-full resize-none rounded-lg border-4 bg-white p-4 text-lg font-semibold text-gray-900 placeholder-gray-500 focus:ring-4 focus:outline-none"
            style={{
              borderColor: messageError
                ? GOOGLE_COLORS.red
                : GOOGLE_COLORS.green,
              boxShadow: "4px 4px 0px #000",
            }}
          />
          {messageError && (
            <p
              id="contact-message-error"
              className="mt-2 text-sm font-semibold text-red-700"
            >
              {messageError}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <motion.button
            type="submit"
            disabled={!canSubmit}
            onHoverStart={() => onHoverChange(true)}
            onHoverEnd={() => onHoverChange(false)}
            className="relative overflow-hidden rounded-full border-4 border-gray-800 bg-white px-12 py-4 text-xl font-bold text-gray-900 shadow-[4px_4px_0_0_#1f2937] disabled:cursor-not-allowed disabled:opacity-60"
            whileHover={{ scale: canSubmit ? 1.05 : 1 }}
            whileTap={{ scale: canSubmit ? 0.95 : 1 }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ background: "transparent" }}
              animate={{
                background:
                  isHovering && canSubmit
                    ? `linear-gradient(135deg, ${GOOGLE_COLORS.blue}, ${GOOGLE_COLORS.red}, ${GOOGLE_COLORS.yellow}, ${GOOGLE_COLORS.green})`
                    : "transparent",
              }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">
              {isSubmitting ? "SENDING..." : "SUBMIT"}
            </span>
          </motion.button>
        </div>
      </form>

      <div className="absolute -top-4 -right-4 h-8 w-8 rotate-45 border-4 border-gray-800 bg-yellow-400" />
      <div className="absolute -bottom-4 -left-4 h-8 w-8 rotate-45 border-4 border-gray-800 bg-green-400" />
    </div>
  );
}
