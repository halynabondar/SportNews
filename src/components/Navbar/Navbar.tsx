"use client"

import Link from "next/link"
import {usePathname} from "next/navigation";
import styles from "./Navbar.module.css"

type NavLink = {
    href: string;
    label: string;
};

const links: NavLink[] = [
    {href: "/", label: "Home"},
    {href: "/leagues", label: "Leagues"},
    {href: "/teams", label: "Teams"},
    {href: "/news", label: "News"},
    {href: "/favorites", label: "Favorites"},
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <h3 className={styles.logo}>Sport Hub</h3>
            <ul className={styles.navbarList}>
                {links.map((link) => (
                    <li key={link.href} className={styles.navbarListItem}>
                        <Link href={link.href} className={pathname === link.href ? styles.active : styles.link}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}