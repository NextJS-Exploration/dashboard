'use client'

import { Menu, X, LogOut } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: "/dashboard", label: "Home" },
    { href: "/dashboard/company", label: "Company" },
    { href: "/dashboard/account", label: "Account" },
  ];

  const handleLogout = async () => {
    // example: call your API to logout / clear cookies
    await fetch("/api/logout", { method: "POST" });
    router.push("/login"); // redirect to login
  };

  return (
    <aside
      className={clsx(
        "flex flex-col bg-brand text-white shadow-md transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-20"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <span className={clsx("font-bold text-lg", !isOpen && "hidden")}>
          Dashboard
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded hover:bg-brand-400"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation links (top) */}
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "flex items-center gap-3 p-2 rounded transition-colors",
              pathname === link.href
                ? "bg-gray-50 text-brand-600 font-bold"
                : "hover:bg-brand-400"
            )}
          >
            <span className="w-6 h-6 bg-brand-300 rounded" />
            {isOpen && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout button (bottom) */}
      <div className="p-4 border-t border-brand-400">
        <Link
          href={"/signout"}
          className="flex items-center gap-3 w-full p-2 rounded hover:bg-brand-400"
        >
          <LogOut size={20} />
          {isOpen && <span>Signout</span>}
        </Link>
      </div>
    </aside>
  );
}
