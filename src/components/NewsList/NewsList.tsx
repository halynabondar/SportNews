import styles from "./NewsList.module.css";

export default function NewsList() {
  return (
    <div className={styles.newsList}>
      <h1>Latest News</h1>
      <ul>
        <li>News item 1</li>
        <li>News item 2</li>
        <li>News item 3</li>
      </ul>
    </div>
  );
}
