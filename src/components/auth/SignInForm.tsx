'use client'

import { signInAction } from "@/app/(auth)/signin/signInAction"
import clsx from "clsx"
import Link from "next/link"
import { useActionState } from "react"

export default function SignInForm() {
    const [error, signinAction, pending] = useActionState(signInAction, undefined)

    return (
        <div className="flex items-center justify-center min-h-screen bg-brand">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl w-full max-w-md p-8 text-gray-800 dark:text-gray-100">
                <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>
                    {!!error?.general && (
                        <div
                            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-900 dark:text-red-200"
                            role="alert"
                        >
                            <span className="font-medium">{error.general}</span><br />
                            {error.status === 403 && (
                                <Link
                                    href="/activate/resend"
                                    className="inline-flex underline items-center text-sm font-bold text-gray-800 transition-colors hover:text-blue-800 dark:text-gray-400 dark:hover:text-gray-300"
                                >
                                    Resend verification email
                                </Link>
                            )}
                        </div>
                    )}
                    <form className="space-y-4" action={signinAction}>
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
                            className={clsx("w-full text-white font-semibold py-2 px-4 rounded-lg transition",
                                pending ? "bg-gray-500" : "bg-brand hover:bg-orange-600"
                            )}
                            disabled={pending}
                        >
                            {pending ? "Signin In..." : "Sign In"}
                        </button>
                    </form>
                <p className="mt-6">Already have an account?  <Link href={"/signup"} className="font-bold text-brand">Sign up</Link> </p>
            </div>
        </div>
    )
}