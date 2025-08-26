import { Metadata } from "next";
import SignInForm from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Login | OwlCourse",
  description: "Login to OwlCourse to start your journey of learning",
};

export default function SignInPage() {
  return (
    <SignInForm/>
  );
}
