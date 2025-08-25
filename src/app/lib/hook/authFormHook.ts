'use client'

import { useUserStore } from "@/app/store/userStore";
import { useState, useMemo, useEffect } from "react";
import { Gender } from "../prisma-client";

export function useSignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string[]>([]);

  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] = useState(false);

  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState(false);
  const genderOptions = useMemo(() => {
    return Object.values(Gender).map((g) => ({
        value: g,
        label: g.charAt(0).toUpperCase()+g.slice(1),
    }))
  }, [])

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);

  const [message, setMessage] = useState("");

  const validateEmail = (value: string) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setEmailError(!isValidEmail);
    return isValidEmail;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    const errors: string[] = [];

    if (value.length < 6) errors.push("at least 6 characters");
    if (!/[A-Z]/.test(value)) errors.push("at least one uppercase letter");
    if (!/[a-z]/.test(value)) errors.push("at least one lowercase letter");
    if (!/[0-9]/.test(value)) errors.push("at least one number");
    if (!/[^A-Za-z0-9]/.test(value)) errors.push("at least one special character");

    setPasswordError(errors);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordConfirmation(value);
    setPasswordConfirmationError(password !== value);
  };

  const handleSelectGenderChange = (value: string) => {
    setGender(value);
    setGenderError(!value);
  };

  const isDisabled = useMemo(() => {
    return !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !passwordConfirmation
      !gender ||
      !address
  }, [firstName, lastName, email, phone, password, passwordConfirmation, gender, address]);


  return {
    firstName, setFirstName, firstNameError,
    lastName, setLastName, lastNameError,
    email, setEmail, emailError, handleEmailChange,
    phone, setPhone, phoneError,
    password, setPassword, passwordError, handlePasswordChange,
    passwordConfirmation, setPasswordConfirmation, passwordConfirmationError, handleConfirmPasswordChange,
    gender, setGender, genderError, genderOptions, handleSelectGenderChange,
    address, setAddress, addressError,
    message, setMessage,
    isDisabled
  };
}