import { useState } from 'react';

type FormState = {
  email: string;
  password: string;
};

export function useLoginForm() {
  const [values, setValues] = useState<FormState>({ email: '', password: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const setField = (field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<FormState> = {};

    if (!values.email.trim()) nextErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Enter a valid email';

    if (!values.password.trim()) nextErrors.password = 'Password is required';
    else if (values.password.length < 8) nextErrors.password = 'Use at least 8 characters';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  return { values, errors, setField, validate };
}
