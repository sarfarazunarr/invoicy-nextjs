import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoicy - Create Invoices Records!",
  description: "Invoicy is a small tool that will help you in managing and creating invoices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-900 w-full p-4 md:p-10`}
      >
        
        {children}
      </body>
    </html>
  );
}
