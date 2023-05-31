import { Navbar } from "@/components/Navbar";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-w-screen min-h-screen lg:max-w-[930px] lg:m-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
