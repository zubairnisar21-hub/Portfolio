import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Zubair — Mobile App Developer",
  description:
    "Flutter and native Android developer with 3 years of experience building polished, production-ready apps with Firebase and Supabase backends.",
  keywords: [
    "Flutter developer",
    "Android developer",
    "Mobile app developer",
    "Firebase",
    "Supabase",
    "Muhammad Zubair",
  ],
  openGraph: {
    title: "Muhammad Zubair — Mobile App Developer",
    description: "Turning ideas into fast, polished mobile apps with real backends.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="ambient" />
        {children}
      </body>
    </html>
  );
}
