import type { Metadata } from "next";
import Header from "@/components/(client)/Header";
import Footer from "@/components/(client)/Footer";

export const metadata: Metadata = {
  title: "Kursiy uz",
  description: "",
};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
