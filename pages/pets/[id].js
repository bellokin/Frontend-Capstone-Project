// pages/pets/[id].js
import Head from "next/head";
import { useRouter } from "next/router";
import pets from "../../data/pets";
import PetDetail from "../../components/PetDetail";

export default function PetPage({ pet }) {
  const router = useRouter();

  // Fallback during static generation
  if (router.isFallback || !pet) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-[var(--muted)] text-[14px] tracking-widest uppercase animate-[pulse_1.5s_ease_infinite]">
          Loading…
        </p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{pet.name} — Ọsin Pet Adoption</title>
        <meta
          name="description"
          content={`Adopt ${pet.name}, a ${pet.age} old ${pet.breed}. ${pet.description.slice(0, 120)}…`}
        />
        <meta property="og:image" content={pet.image} />
      </Head>
      <PetDetail pet={pet} />
    </>
  );
}

// ─── Static Generation ───────────────────────────────────────────────────────

export async function getStaticPaths() {
  const paths = pets.map((p) => ({ params: { id: String(p.id) } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const pet = pets.find((p) => p.id === Number(params.id)) ?? null;
  if (!pet) return { notFound: true };
  return { props: { pet } };
}
