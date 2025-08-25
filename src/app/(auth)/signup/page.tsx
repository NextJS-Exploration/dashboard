import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const experimental_ppr = true;

export const metadata: Metadata = {
  title: "Login | OwlCourse",
  description: "Login to OwlCourse to start your journey of learning",
};

export default function SignUpPage() {
  return (
    <main>
      <SignUpForm />
    </main>
  );
}
