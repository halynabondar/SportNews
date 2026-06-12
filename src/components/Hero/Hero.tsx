import styles from "./Hero.module.css"

export default function Hero() {
    return (
        <div className={styles.hero}>
            <h1>Welcome to SportHub</h1>
            <p>Get the latest sports news and updates</p>
        </div>
    )
}