"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

export default function AdminPostPage() {
  const router = useRouter();
  const [secretKey, setSecretKey] = useState("");
  const [showSecret, setShowSecret] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); // 防止 form reload

    try {
      const res = await fetch("/api/admin/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: secretKey }),
      });

      if (res.ok) {
        router.replace("/admin/dashboard");
      } else {
        alert("Sign-in failed");
      }
    } catch (error) {
      alert("Error during sign-in");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Admin Signin</h1>

      <form onSubmit={handleSignIn} className="flex flex-col items-center mt-4">
        <div className="flex items-center flex-row">
        <input
          type={showSecret ? "text" :"password"}
          placeholder="secret key"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        />
        {showSecret ? <Eye onClick={()=>setShowSecret(!showSecret)} /> : <EyeClosed onClick={()=>setShowSecret(!showSecret)} />}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
          disabled={!secretKey}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
