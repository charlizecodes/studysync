"use client";

import ProfileCard from '../../components/ProfileCard';
export const metadata = {
  title: "Dashboard | StudySync",
};

//simple user object as a mock logged in user
const currentUser = {
  name: "Charlize Tan",
  courses: ["CS 122A", "CS 101", "Math 2A"]
};

// dummy courses that the dropdown will pull from 
const courses = ["CS 101","CS 122A", "CS 102", "Stats 67", "Math 2A", "Physics 7A", "Weightlifing"];

// dummy matches, since API calling is not set up yet. 
const matches = [
  { name: "Alice", course: "CS 101" },
  { name: "Bob", course: "Math 2A" },
  { name: "char", course: "Math 1A" },
  { name: "reise", course: "Math 2c" }
];


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
    
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-yellow-100 p-6">
      <h2 className="text-xl font-semibold mb-4">
      Welcome, {currentUser.name} !
      </h2>
      <h1 className="text-3xl font-bold mb-6">your matches</h1>
      <select className="border p-2 rounded-lg mb-4">
        {courses.map((course) => (
        <option key={course} value={course}>{course}</option>
        ))}
      </select>
      <button className="border p-3 px-3 py-2 bg-blue-600 text-white rounded-lg">
        Find Your Buddy
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {matches.map((user) => (
         <div key={user.name} className="p-4 border rounded-lg shadow">
           <p className="font-semibold">{user.name}</p>
           <p className="text-gray-600">{user.course}</p>
         </div>
        ))}
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