import Link from "next/link";
import React from "react";

export default function EmailRegisteredScreen() {
  return (
     <div className="flex items-center justify-center min-h-screen bg-brand">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl w-full max-w-md p-8 text-gray-800 dark:text-gray-100">
        <h1 className="mb-8 text-brand-500 font-bold text-2xl dark:text-white/90 xl:text-4xl text-center">
          Account registered!
        </h1>
        <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
          Check your email. We have been sent you and email to verify your account
        </p>
        <Link
          href="/signin"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-brand px-5 py-3.5 text-white text-sm font-medium shadow-theme-xs hover:bg-orange-600 hover:text-gray-300 dark:border-gray-700 "
        >
          Sign in
        </Link><br/><br />
        <Link
          href="/activate/resend"
          className="inline-flex underline items-center text-sm text-bold text-gray-800 transition-colors hover:text-blue-800 dark:text-gray-400 dark:hover:text-gray-300"
        >
          Resend verification email
        </Link>
      </div>
    </div>
  );
}
