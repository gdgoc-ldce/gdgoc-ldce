export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
