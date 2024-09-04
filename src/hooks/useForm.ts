import { useState } from "react";

type FormErrors<T> = {
  [K in keyof T]: string | null;
};

const useForm = <T extends Record<string, any>>(
  initialValues: T,
  onSubmit: () => void,
  optionalValues?: (keyof T)[],
  clearForm: boolean = true
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({} as FormErrors<T>);

  const handleChange = (name: string, value: string) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => {
      if (prevErrors[name]) {
        return { ...prevErrors, [name]: null };
      } else {
        return prevErrors;
      }
    });
  };

  const handleSubmit = () => {
    // Form Validation
    const validationErrors: FormErrors<T> = {} as FormErrors<T>;
    Object.entries(values).forEach(([key, val]) => {
      if (
        !optionalValues?.includes(key as keyof T) &&
        (!val || val?.trim() === "")
      ) {
        validationErrors[key as keyof T] = "This field is required";
      } else if (
        !optionalValues?.includes(key as keyof T) &&
        val?.trim().length < 3
      ) {
        validationErrors[key as keyof T] =
          "This field must contain at least 3 characters";
      } else if (key === "cnic" && !/^(\d{5})-(\d{7})-(\d{1})$/.test(val)) {
        validationErrors[key as keyof T] =
          "Invalid CNIC format. Expected format: 12345-1234567-1";
      } else if (key === "passport" && !/^[A-Z]{2}\d{7}$/.test(val)) {
        validationErrors[key as keyof T] =
          "Invalid passport format. Expected format: AB1234567";
      } else if (key === "email" && !/^\S+@\S+\.\S+$/.test(val)) {
        validationErrors[key as keyof T] =
          "Invalid email format. Expected format: example@example.com";
      } else if (key === "zip" && !/^\d{5}$/.test(val)) {
        validationErrors[key as keyof T] =
          "Invalid zip code. Expected format: 12345";
      } else if (key === "phone" && !/^\+\d{11,14}$/.test(val)) {
        validationErrors[key as keyof T] =
          "Invalid phone number. Expected format: +12345678901234";
      } else if (
        key === "iban" &&
        !/^[A-Z]{2} \d{2} [A-Z0-9]{1,30}$/.test(val)
      ) {
        validationErrors[key as keyof T] =
          "Invalid IBAN. Expected format: two uppercase letters, a space, two digits, a space, then up to 30 alphanumeric characters";
      }
    });

    if (Object.keys(validationErrors).length === 0) {
      onSubmit();
      clearForm && setValues(initialValues);
    } else {
      setErrors(validationErrors);
    }
  };

  return {
    values,
    setValues,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
