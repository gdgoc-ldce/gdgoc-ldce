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
  const [touched, setTouched] = useState<Record<keyof ContactFormData, boolean>>({
    name: false,
    email: false,
    message: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e.target.name as keyof ContactFormData;

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setTouched((prev) => ({
      ...prev,
      [key]: true,
    }));

    setErrors((prev) => {
      if (!prev[key]) return prev;
      const nextData = { ...formData, [key]: e.target.value } as ContactFormData;
      const nextErrors = validateContactForm(nextData);
      return { ...prev, [key]: nextErrors[key] };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });
    const nextErrors = validateContactForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitted(true);
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
