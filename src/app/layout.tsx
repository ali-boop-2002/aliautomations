import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Ali Automations - AI-Powered Property Operations",
  description: "AI-Powered Ops Automation for Property Managers. Extract violations, auto-tickets, Sheets integration & more.",
  keywords: "property management, automation, AI, property ops",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}
