"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export function useAuth(redirectToLogin: boolean = true) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser && redirectToLogin) {
        router.push("/login");
      }
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [redirectToLogin, router]);

  return { user, loading };
}
