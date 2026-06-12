import styles from "./UpcomingMatches.module.css";

export default function UpcomingMatches() {
  return (
    <section className={styles.upcomingMatches}>
      <h2>Upcoming Matches</h2>

      <div className={styles.matchCard}>
        <h3>Arsenal vs Chelsea</h3>
        <p>12 June 2026</p>
      </div>

      <div className={styles.matchCard}>
        <h3>Real Madrid vs Barcelona</h3>
        <p>15 June 2026</p>
      </div>
    </section>
  );
}
