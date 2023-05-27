import { Navbar } from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("log in root layout");
  return (
    <html lang="en">
      <body className="min-w-screen min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
