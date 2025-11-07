"use client";

import ProfileCard from '../../components/ProfileCard';

import { useAuth } from "@/lib/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, loading } = useAuth(); // ✅ this handles login state
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Loading...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-green-600">
        Welcome, {user.displayName}
      </h1>
      <p className="mb-6 text-gray-700">Email: {user.email}</p>

      <h1 className="text-3xl font-bold text-blue-600 mb-6">Your Study Buddies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        {/* Placeholder cards */}
        <ProfileCard name="Alice" major="CS" interests="Algorithms" />
        <ProfileCard name="Bob" major="Math" interests="Statistics" />
        <ProfileCard name="Charlie" major="Physics" interests="Quantum" />
      </div>

      <button
        onClick={() => {
          signOut(auth);
          router.push("/login");
        }}
        className="p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
      >
        Sign Out
      </button>
    </div>
  );
}