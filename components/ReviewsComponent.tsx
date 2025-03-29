import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const clientLogos = [
  {
    name: "Senter Logistics",
    url: "https://senter.mx",
    img: "/client-logo/senter-colored-1040x-200.webp",
  },
  {
    name: "Expertum",
    url: "https://expertum.com.co/",
    img: "/client-logo/expertum.webp",
  },
  {
    name: "Grupo Madaltos",
    url: "http://www.grupomadaltos.com.mx/",
    img: "/client-logo/grupo-madaltos.webp",
  },
  {
    name: "Dimovere",
    url: "https://dimovere.com/",
    img: "/client-logo/dimovere.webp",
  },
  {
    name: "Materile",
    url: "https://materilejuguetes.com/",
    img: "/client-logo/materile.webp",
  },
];

const ClientLogo = ({ img, url, name }: { img: string; url: string; name: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="client-logo bg-white shadow-md rounded-lg p-4 mx-auto">
      <Image 
      width={200}
      height={200}
      src={img} alt={name} className="h-16 object-contain" />
    </a>
  );
};

export default function ClientLogosSection() {
  return (
    <section className="pt-0 mb-4" data-aos="fade-down" data-aos-delay="1000">
      <div className="container mx-auto">
        <div className="flex items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {clientLogos.map((logo) => (
              <ClientLogo key={logo.url} {...logo} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}