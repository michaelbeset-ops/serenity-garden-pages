import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Pillars } from "@/components/site/Pillars";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { ServiceArea } from "@/components/site/ServiceArea";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Armando Lunenburg Tuinverzorging | Hovenier in Uden, Veghel & Oss" },
      {
        name: "description",
        content:
          "25+ jaar vakmanschap in tuinontwerp, aanleg en onderhoud in Uden, Veghel, Oss, Heesch, Bernheze en Nistelrode. Plan een vrijblijvende afspraak.",
      },
      { property: "og:title", content: "Armando Lunenburg Tuinverzorging | Hovenier in Uden e.o." },
      {
        property: "og:description",
        content:
          "Premium hoveniersbedrijf met 25 jaar ervaring. Tuinontwerp, aanleg, onderhoud en bestrating in Noordoost-Brabant.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300;9..144,400;9..144,500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream text-ink">
      <Nav />
      <Hero />
      <Pillars />
      <Services />
      <Work />
      <About />
      <Reviews />
      <ServiceArea />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
