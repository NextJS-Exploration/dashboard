import Link from "next/link";

export default function LoadingActivationScreen() {
    return (
     <div className="flex items-center justify-center min-h-screen bg-brand">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl w-full max-w-md p-8 text-gray-800 dark:text-gray-100">
        <h1 className="mb-8 text-brand-500 font-bold text-2xl dark:text-white/90 xl:text-4xl text-center">
          Account activation
        </h1>
        <p className="mt-10 animate-pulse mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg text-center">
          Verifying...
        </p>
      </div>
    </div>
  );
}