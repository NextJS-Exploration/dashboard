'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from 'next/navigation';

export default function ActivationPage() {

    const params = useParams();
    const token = params.token;

    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [message, setMessage] = useState("Verifying..."); // Status message
    const [error, setError] = useState(false)

    useEffect(() => {
        async function verify() {
            console.log(token)
            try {
                const res = await fetch("/api/activate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token }),
                });
                const data = await res.json();
                if (!res.ok) {
                    setError(true)
                }
                setMessage(data.message);
            } catch (err) {
                setMessage("Verification failed");
            } finally {
                setIsLoading(false);
            }
        }
        verify();
    }, [token]);

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-brand">
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl w-full max-w-xl p-8 text-gray-800 dark:text-gray-100">
                    {isLoading ? (
                    // Show this while loading
                    <p className="mt-10 mb-10 text-base sm:text-lg text-center animate-pulse text-gray-700 dark:text-gray-400">
                        {message}
                    </p>
                    ) : error ? (
                    // Show this if there's an error
                    <div className="text-center mt-10 mb-10">
                        <h1 className="mb-8 text-red-500 dark:text-red-400 font-bold text-2xl xl:text-4xl text-center">
                            {message}
                        </h1>
                        <Link href={"/activate/resend"}>Resend activation link</Link>
                    </div>
                    ) : (
                    // Show this if success
                    <div className="mt-10 mb-10 text-center">
                        <h1 className="mb-8 text-green-700 dark:text-green-200 font-bold text-2xl xl:text-4xl text-center">
                            {message}
                        </h1>
                        <Link
                        href={"/signin"}
                        className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-brand px-5 py-3.5 text-white text-sm font-medium shadow-theme-xs hover:bg-orange-600 hover:text-gray-300 dark:border-gray-700 "
                        >
                            Sign in
                        </Link>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}