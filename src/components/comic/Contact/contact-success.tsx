"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { ComicTitle } from "@/components/comic";
import { INSTAGRAM_URL } from "./constants";

export default function ContactSuccess() {
  return (
    <div className="relative rounded-2xl border-4 border-gray-800 bg-gradient-to-br from-purple-50 to-pink-50 p-12 shadow-[8px_8px_0_0_#1f2937]">
      <ComicTitle bg="green" halftone={true} shadow={true}>
        THANK YOU!
      </ComicTitle>

      <div className="mt-8 space-y-6">
        <p className="text-2xl font-bold text-gray-900">We'll get back to you soon!</p>

        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="rounded-full border-4 border-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 p-1 shadow-[4px_4px_0_0_#1f2937]"
          >
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-gray-900 hover:bg-gray-50"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
              Follow us on Instagram
            </Link>
          </motion.div>
        </div>

        <p className="text-lg text-gray-600">Stay updated with our latest events and activities</p>
      </div>

      <div className="absolute -top-4 -right-4 h-8 w-8 rotate-45 border-4 border-gray-800 bg-blue-400" />
      <div className="absolute -bottom-4 -left-4 h-8 w-8 rotate-45 border-4 border-gray-800 bg-red-400" />
      <div className="absolute top-1/2 -left-6 h-8 w-8 -translate-y-1/2 rotate-45 border-4 border-gray-800 bg-yellow-400" />
    </div>
  );
}
