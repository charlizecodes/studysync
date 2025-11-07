/* import Image from "next/image"; */
"use client"

import Link from 'next/link';
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-yellow-100">
      

    {/* Logo */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        className="mb-8"
      >
        <Image
          src="/UCIanteater.png"
          alt="UCI anteater logo"
          width={200}
          height={200}
          className="mx-auto"
        />
      </motion.div>
      <motion.h1
        className="text-5xl font-bold mb-4 text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        Welcome to StudySync
        
      </motion.h1>
      <motion.h2
        className="mb-9 text-gray-700 text-sm sm:text-base md:text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        >
        Find your perfect study buddy in UCI — match by course, schedule, and interests!

      </motion.h2>
      <div className="space-x-4">
        <Link href="/login" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100">
          Login
        </Link>
      </div>
{/*       <div className=" flex items-center bg-white shadow-md rounded-lg p-2 w-80">
      <input
        type="text"
        placeholder="Search for a class..."
        className="flex-grow p-2 outline-none"
       />
      <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">Search</button>
      </div> */}
    </div>
  );
}



