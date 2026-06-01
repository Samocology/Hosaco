import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import hero from "@/assets/hero-students.jpg";
import campus from "@/assets/campus.jpg";
import lab from "@/assets/science-lab.jpg";
import classroom from "@/assets/classroom.jpg";
import sports from "@/assets/sports.jpg";

const images = [hero, campus, lab, classroom, sports, hero, sports, lab, classroom, campus, hero, sports];

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Holy Saviours College" }, { name: "description", content: "Moments from campus life at Holy Saviours College." }] }),
  component: Gallery,
});

function Gallery() {
  return (
    <SiteLayout>
      <Section eyebrow="Gallery" title="Life at Holy Saviours.">
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl break-inside-avoid">
              <img src={src} alt={`Gallery ${i+1}`} loading="lazy" className="w-full transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
