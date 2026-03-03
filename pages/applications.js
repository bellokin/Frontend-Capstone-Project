// pages/applications.js
import Head from "next/head";
import Link from "next/link";
import { useApp } from "../context/AppContext";

export default function ApplicationsPage() {
  const { applications, withdrawApplication, isApplied } = useApp();

  return (
    <>
      <Head>
        <title>My Applications — Ọsin</title>
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="section-eyebrow text-[10px] mb-5">Adoption Portal</p>
          <h1 className="font-display text-[56px] md:text-[72px] font-semibold text-white leading-none mb-3">
            My Applications
          </h1>
          <p className="text-[15px] text-[var(--muted-hi)]">
            {applications.length === 0
              ? "No applications submitted yet."
              : `${applications.length} active application${applications.length !== 1 ? "s" : ""}.`}
          </p>
        </div>

        {/* Empty state */}
        {applications.length === 0 ? (
          <div className="surface flex flex-col items-center justify-center py-24 text-center px-8">
            <span className="text-6xl mb-6">📋</span>
            <h2 className="font-display text-4xl font-semibold text-white mb-3">
              No applications yet
            </h2>
            <p className="text-[14px] text-[var(--muted)] max-w-sm leading-relaxed mb-8">
              When you apply to adopt an animal, they'll appear here. Head
              back and find your match.
            </p>
            <Link href="/" className="btn-gold px-8 py-3 rounded-full">
              Browse animals →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {applications.map((pet, i) => (
              <article
                key={pet.id}
                className="surface flex overflow-hidden hover:border-[rgba(212,168,83,0.25)] hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                {/* Image strip */}
                <div className="w-[130px] flex-shrink-0 relative overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: pet.color }}
                  />
                </div>

                {/* Body */}
                <div className="p-6 flex-1">
                  {/* Status */}
                  <div className="status-badge pending mb-3">
                    <span className="status-dot" />
                    Under Review
                  </div>

                  <h2 className="font-display text-[30px] font-semibold text-white leading-none mb-1">
                    {pet.name}
                  </h2>
                  <p className="text-[13px] text-[var(--muted)] mb-5 tracking-wide">
                    {pet.breed} · {pet.age} · {pet.gender}
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    <Link
                      href={`/pets/${pet.id}`}
                      className="btn-ghost text-[12px] py-2 px-4"
                    >
                      View Profile
                    </Link>
                    <button
                      className="text-[12px] text-[var(--muted)] hover:text-[var(--red)] border border-[var(--border)] hover:border-[rgba(224,85,85,0.4)] px-4 py-2 rounded-xl transition-all font-medium"
                      onClick={() => withdrawApplication(pet)}
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Info callout */}
        {applications.length > 0 && (
          <div className="mt-10 surface p-6 border-[var(--gold-dim)] flex items-start gap-4">
            <span className="text-2xl mt-0.5">ℹ️</span>
            <div>
              <p className="text-[14px] text-[var(--white)] font-medium mb-1">
                What happens next?
              </p>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">
                Our team reviews all applications within 3–5 business days.
                You'll receive an email with next steps, a home check schedule,
                and details about meeting your potential new family member.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
