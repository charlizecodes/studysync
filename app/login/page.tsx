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

      if (!user.email?.endsWith("@uci.edu")) {
        alert("Please use your UCI email address.");
        return;
      }

      console.log("Signed in as:", user.displayName, user.email);

      router.push("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg space-y-6">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          StudySync
        </h1>
        <p className="text-center text-gray-600">
          Sign in with your UCI Google account to continue
        </p>
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}