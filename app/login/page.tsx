"use client";

import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function Login() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Restrict to UC emails
      if (!user.email?.endsWith("@uci.edu")) {
        alert("Please use your UCI email address.");
        return;
      }

      console.log("Signed in as:", user.displayName, user.email);

      // ✅ Redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Login</h1>
      <button
        onClick={handleGoogleLogin}
        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Sign in with UC Google
      </button>
    </div>
  );
}