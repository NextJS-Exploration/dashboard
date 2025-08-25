'user client'

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | OwlCourse",
  description: "Login to OwlCourse to start your journey of learning",
};

export default function SignInForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-brand">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl w-full max-w-md p-8 text-gray-800 dark:text-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>
        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-brand text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition"
          >
            Sign in
          </button>
        </form>
        <p className="mt-6">Already have an account?  <Link href={"/signup"} className="font-bold text-brand">Sign up</Link> </p>
      </div>
    </div>
  );
}
