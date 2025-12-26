import type { ContactFormData, ContactFormErrors } from "./types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = data.name.trim();
  if (!name) {
    errors.name = "Name is required";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (name.length > 60) {
    errors.name = "Name must be 60 characters or less";
  }

  const email = data.email.trim();
  if (!email) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email";
  }

  const message = data.message.trim();
  if (!message) {
    errors.message = "Message is required";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (message.length > 1000) {
    errors.message = "Message must be 1000 characters or less";
  }

  return errors;
}
