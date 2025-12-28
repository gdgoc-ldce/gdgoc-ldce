"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ContactForm from "./contact-form";
import ContactSuccess from "./contact-success";
import type { ContactFormData, ContactFormErrors } from "./types";
import { validateContactForm } from "./validation";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<
    Record<keyof ContactFormData, boolean>
  >({
    name: false,
    email: false,
    message: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const key = e.target.name as keyof ContactFormData;
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const nextData = {
        ...formData,
        [key]: e.target.value,
      } as ContactFormData;
      const nextErrors = validateContactForm(nextData);
      return { ...prev, [key]: nextErrors[key] };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const COOLDOWN_SECONDS = 60;
    const lastSubmitTime = localStorage.getItem("lastSubmitTime");

    if (lastSubmitTime) {
      const timeSinceLastSubmit = Date.now() - parseInt(lastSubmitTime, 10);
      if (timeSinceLastSubmit < COOLDOWN_SECONDS * 1000) {
        const timeLeft = Math.ceil(
          (COOLDOWN_SECONDS * 1000 - timeSinceLastSubmit) / 1000,
        );
        alert(`Please wait ${timeLeft} more seconds before submitting again.`);
        return;
      }
    }

    setIsSubmitting(true);

    setTouched({ name: true, email: true, message: true });
    const nextErrors = validateContactForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/your-email@example.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
        localStorage.setItem("lastSubmitTime", Date.now().toString());
      } else {
        console.error("Form submission failed:", await response.text());
        alert(
          "Sorry, there was an error sending your message. Please try again.",
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert(
        "A network error occurred. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="text-center text-4xl font-extrabold tracking-wide text-gray-900 md:text-6xl">
            Contact Us
          </h1>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              <ContactForm
                formData={formData}
                errors={errors}
                touched={touched}
                isHovering={isHovering}
                isSubmitting={isSubmitting}
                onHoverChange={setIsHovering}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <ContactSuccess />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
