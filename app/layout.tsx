import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { ReactQueryProvider } from "@/context/react-query-provider";
import { Navbar } from "@/components/system/navbar";

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400','500', '600', '700', '800', '900']})

export const metadata: Metadata = {
  title: "Rick And Morty App - Luis Montiel",
  description: "Rick And Morty App con un fetching de datos avanzado y tecnologías de manejo de estado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-[#151515]`}>
        <ReactQueryProvider>
          <div>
            <Navbar />
            <div className="w-full max-w-6xl mx-auto px-4">
              {children}
            </div>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
