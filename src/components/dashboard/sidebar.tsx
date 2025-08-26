'use client'

import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const pathname = usePathname();

    const links = [
        { href: "/dashboard", label: "Home" },
        { href: "/dashboard/company", label: "Company" },
        { href: "/dashboard/account", label: "Account" },
    ];

    return (
        <aside
          className={clsx(
            "bg-brand text-white shadow-md transition-all duration-300 ease-in-out",
            isOpen ? "w-64" : "w-20"
          )}
        >
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
          <nav className="p-4 space-y-2">
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
        </aside>
    );
}