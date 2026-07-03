"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,

          behavior: "smooth",
        })
      }
      className="fixed bottom-8 right-8 bg-orange-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
    >
      <ArrowUp />
    </button>
  );
}
