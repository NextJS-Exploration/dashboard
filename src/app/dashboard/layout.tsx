import { ReactNode } from "react";
import "../globals.css";
import Sidebar from "@/components/dashboard/sidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
  

  return (
      <div className="flex min-h-screen bg-gray-100 text-gray-900">
        {/* Sidebar */}
        <Sidebar/>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
  );
}
