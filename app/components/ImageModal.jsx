"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function ImageModal({ open, onClose, image, title }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-[999] flex justify-center items-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl"
          >
            <button
              onClick={onClose}
              className="absolute -top-14 right-0 text-white"
            >
              <X size={35} />
            </button>

            <img
              src={image}
              alt={title}
              className="rounded-2xl shadow-2xl max-h-[80vh]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
