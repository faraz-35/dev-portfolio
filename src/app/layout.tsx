import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lightangle Technologies",
  description: "",
  icons: {
    icon: "/images/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Logo.png" sizes="any" />
      </head>
      <body
        className={`${poppins.className} overflow-x-hidden w-[100vw] pt-[61px] `}
      >
        {children}
      </body>
    </html>
  );
}
