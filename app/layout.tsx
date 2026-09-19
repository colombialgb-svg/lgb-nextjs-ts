import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "LGB Colombia",
  description:
    "Defendemos los derechos de lesbianas, gays y bisexuales en Colombia.",
  icons: {
    icon: "/logo_v6_notitle.png",
    shortcut: "/logo_v6_notitle.png",
    apple: "/logo_v6_notitle.png",
  },
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
