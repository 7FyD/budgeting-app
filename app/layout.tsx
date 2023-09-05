import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Anek_Bangla } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

const anek = Anek_Bangla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budgeting Webapp",
  description:
    "This is a free budgeting web application which helps you manage your money better, save up and invest them and live a better life!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={anek.className}>
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        <div className="pb-10 pt-[76px]">{children}</div>
        <div className="text-center">Test</div>
      </body>
    </html>
  );
}
