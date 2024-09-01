import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thunder Web",
  description: "Thunder Client를 web에서 사용할 수 있도록 하는 프로젝트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn("bg-background w-full h-screen", sora.className)}>
        {children}
      </body>
    </html>
  );
}
