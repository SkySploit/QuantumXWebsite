import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Team from "@/components/team";
import Download from "@/components/download";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#23272A] text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Download />
        <Team />
      </main>
    </div>
  );
}