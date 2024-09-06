import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TCG Tracker",
  description: "Your one stop shop for your digial collection of trading cards"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
