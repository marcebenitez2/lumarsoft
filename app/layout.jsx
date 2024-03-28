import Navbar from "../components/navbar";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import WspBtn from "@/components/WspBtn";

<link rel="icon" href="/favicon.ico" sizes="any" />;

export const metadata = {
  title: "LumarSoft",
  description:
    "Lumarsoft es una consultora de desarrollo de software comprometida con la excelencia y la satisfacción del cliente. Ofrecemos soluciones personalizadas para tus necesidades de desarrollo. Actua ahora. Crea el futuro",
  keywords: [
    "Lumarsoft",
    "Lumar",
    "Software",
    "Desarrollo",
    "Consultora",
    "Consultora de Software",
    "Desarrollo de Software",
    "Desarrollo de Aplicaciones",
    "Desarrollo de Aplicaciones Web",
    "Desarrollo de Aplicaciones Móviles",
    "Desarrollo de Aplicaciones Empresariales",
    "Desarrollo de Aplicaciones a Medida",
    "Desarrollo de Software a Medida",
    "Desarrollo de Software Empresarial",
    "Desarrollo de Software Web",
    "Desarrollo de Software Móvil",
    "Desarrollo de Software Empresarial",
  ],
  author: "Lumarsoft",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} text-white bg-black overflow-x-hidden `}
      >
        <Navbar />
        {children}
        <WspBtn />
      </body>
    </html>
  );
}
