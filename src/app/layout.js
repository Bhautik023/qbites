import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/header/Header";
import Footer from "@/component/header/footer/Footer";
import { Poppins } from "next/font/google";
import Providers from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose your desired weights
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Qbits Inverters",
  description: "AI Powered Inverters from Qbits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
