'use client'

import { useSignUpForm } from "@/app/lib/hook/authFormHook";
import { Gender } from "@/app/lib/prisma-client";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { signupAction } from "@/app/(auth)/signup/signUpAction";
import EmailRegisteredScreen from "./EmailRegisteredScreen";

export default function SignUpForm() {

  const [formModal, setFormModal] = useState(false)

  const [error, signUpAction, pending] = useActionState(signupAction, undefined)

  const {
    firstName, setFirstName, firstNameError,
    lastName, setLastName, lastNameError,
    email, handleEmailChange, emailError,
    phone, setPhone, phoneError,
    password, handlePasswordChange, passwordError,
    passwordConfirmation, handleConfirmPasswordChange, passwordConfirmationError,
    gender, handleSelectGenderChange, genderOptions, genderError,
    address, setAddress, addressError,
    isDisabled
  } = useSignUpForm();

  useEffect(() => {

  }, [error?.general]);

  if (error?.success) {
    return <EmailRegisteredScreen />
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl w-full max-w-md p-8 text-gray-800 dark:text-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Sign up</h2>
        {!!error?.general && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-900 dark:text-red-200"
            role="alert"
          >
            <span className="font-medium">{error.general}</span>
          </div>
        )}
        <form className="space-y-4" action={signUpAction}>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className={`w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:outline-none ${
                firstNameError
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-orange-400'
              }`}
            />
            {firstNameError && (
              <p className="text-red-500 text-sm mt-1">First name is required</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className={`w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:outline-none ${
                lastNameError
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-orange-400'
              }`}
            />
            {lastNameError && (
              <p className="text-red-500 text-sm mt-1">Last name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              className={`w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:outline-none ${
                emailError
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-orange-400'
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className={`w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:outline-none ${
                phoneError
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-orange-400'
              }`}
            />
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">Phone is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className={`w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:outline-none ${
                passwordError.length > 0
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-orange-400'
              }`}
            />
            {passwordError.length > 0 && (
              <ul className="text-red-500 text-sm mt-1 list-disc list-inside">
                {passwordError.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={handleConfirmPasswordChange}
              required
              className={`w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:outline-none ${
                passwordConfirmationError
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-orange-400'
              }`}
            />
            {passwordConfirmationError && (
              <p className="text-red-500 text-sm mt-1">Password confirmation doesn't match</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => handleSelectGenderChange(e.target.value as Gender)}
              required
              className={`w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:outline-none ${
                genderError
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-300 dark:border-gray-600 focus:ring-orange-400'
              }`}
            >
              <option value="" disabled>Select gender</option>
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {genderError && (
              <p className="text-red-500 text-sm mt-1">Please select a gender</p>
            )}
          </div>


          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
            <textarea
              name="address"
              rows={3}
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            ></textarea>
          </div>
          {addressError && (
            <p className="text-red-500 text-sm mt-1">Please select a gender</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isDisabled || pending}
            className="w-full bg-brand text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition"
          >
            { pending ? "Signing up.." : "Sign up" }
          </button>
        </form>
        <p className="mt-6">Already have an account? <Link href={"/signin"} className="font-bold text-brand">Sign In</Link> </p>
      </div>

      {/* dialog */}
      <Dialog open={formModal} onClose={setFormModal} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-400" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-white">
                      Account registered
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-400">
                        Please check on your email to activate your account
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <Link href={"/signin"} className="inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white hover:bg-green-400 sm:ml-3 sm:w-auto">
                  Sign in
                </Link>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setFormModal(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
