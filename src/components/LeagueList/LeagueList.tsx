import styles from "./LeagueList.module.css";

export default function LeagueList() {
  return (
    <section className={styles.leagueList}>
      <h2>Popular Leagues</h2>

      <ul>
        <li>Premier League</li>
        <li>La Liga</li>
        <li>Serie A</li>
        <li>Bundesliga</li>
      </ul>
    </section>
  );
}
