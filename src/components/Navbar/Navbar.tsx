import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
    <div>
      <nav className={styles.navbar}>
          <h3>SportHub</h3>
          <ul className={styles.navbarList}>
              <li>Home</li>
              <li>Leagues</li>
              <li>Teams</li>
              <li>News</li>
              <li>Favorites</li>
          </ul>
      </nav>
    </div>
    )
}