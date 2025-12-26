"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GdgLogoIcon from "./gdg-logo-icon";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
<<<<<<< HEAD
  { href: "#contact", label: "Contact" },
=======
  { href: "/contact", label: "Contact" },
>>>>>>> origin/keval
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "";
    }
    return () => {
      if (typeof document !== "undefined") document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="sticky inset-x-0 top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <GdgLogoIcon />
            <span className="font-title text-xl font-bold tracking-widest text-gray-900">
              GDGOC LDCE
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
            <Link
<<<<<<< HEAD
              href="#"
=======
              href="/contact"
>>>>>>> origin/keval
              className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-gray-800 hover:shadow-lg"
            >
              Join Us
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-all active:scale-95 md:hidden"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 flex flex-col bg-white md:hidden"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-linear-to-br from-blue-400 to-blue-600 blur-3xl"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-linear-to-tr from-yellow-300 to-red-400 blur-3xl"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="pointer-events-none absolute right-10 bottom-40 h-48 w-48 rounded-full bg-linear-to-bl from-green-400 to-teal-500 blur-3xl"
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="flex h-16 items-center justify-between px-5"
            >
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <GdgLogoIcon />
                <span className="font-title text-xl font-bold tracking-widest text-gray-900">
                  GDGOC
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 transition-all active:scale-90 active:bg-gray-200"
              >
                <motion.svg
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </motion.svg>
              </button>
            </motion.div>

            <nav className="relative z-10 flex flex-1 flex-col items-center justify-center gap-3 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{
                    delay: 0.15 + i * 0.07,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="group font-title relative overflow-hidden rounded-2xl px-8 py-4 text-center text-5xl font-bold tracking-wide text-gray-800 transition-colors hover:text-gray-900"
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.span
                    className="absolute inset-0 z-0 rounded-2xl bg-gray-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
              className="relative z-10 p-6"
            >
              <Link
<<<<<<< HEAD
                href="#"
=======
                href="/contact"
>>>>>>> origin/keval
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gray-900 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl active:scale-[0.97]"
              >
                Join the Community
                <motion.svg
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
