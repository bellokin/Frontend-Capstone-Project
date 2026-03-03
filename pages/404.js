// pages/404.js
import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head><title>404 — Ọsin</title></Head>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <span className="font-display text-[120px] font-semibold text-[var(--border)] leading-none mb-4">
          404
        </span>
        <h1 className="font-display text-[36px] font-semibold text-white mb-3">
          This page ran away
        </h1>
        <p className="text-[14px] text-[var(--muted)] max-w-sm leading-relaxed mb-8">
          Just like a curious cat, this page has wandered somewhere we can't
          find it. Let's get you back home.
        </p>
        <Link href="/" className="btn-gold px-10 py-4 rounded-full text-[14px]">
          Back to browsing
        </Link>
      </div>
    </>
  );
}
