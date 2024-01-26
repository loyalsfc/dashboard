import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const plusJakartaSans = Plus_Jakarta_Sans({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard coding challenge",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <div className="flex h-screen">
          <aside className=" h-full transition-all hidden sm:block">
            <Sidebar />
          </aside>
          {children}
        </div>
      </body>
    </html>
  );
}
