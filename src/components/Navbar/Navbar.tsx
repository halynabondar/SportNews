"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/leagues", label: "Leagues" },
  { href: "/teams", label: "Teams" },
  { href: "/news", label: "News" },
  { href: "/favorites", label: "Favorites" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Sport Hub
      </Link>
      <ul className={styles.navbarList}>
        {links.map((link) => (
          <li key={link.href} className={styles.navbarListItem}>
            <Link
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
