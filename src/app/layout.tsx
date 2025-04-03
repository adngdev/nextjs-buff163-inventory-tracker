import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const PoppinsFont = Poppins({
    weight: ['300']
});

export const metadata: Metadata = {
  title: "Buff Invetory Tracker"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PoppinsFont} antialiased`}>
        <div className={`relative`}>
            <Navbar />
            {children}
        </div>
      </body>
    </html>
  );
}
