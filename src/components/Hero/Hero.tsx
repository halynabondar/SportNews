import styles from "./Hero.module.css";
import Image from "next/image";
import NewsToday from "@/components/Hero/NewsToday";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroMain}>
                    <Image src="/images/Hero.png" alt="Hero image" width={716} height={513} className={styles.heroImage}/>
                    <Image src="/images/basketball.png" alt="Hero image" width={720} height={580}
                           className={styles.heroBasketball}/>
                    <h1 className={styles.heroTitle}>Top scorer to the final match</h1>
                    <p className={styles.heroDescription}>The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest
                        points in the EuroLeague Finals</p>
                    <button className={styles.heroButton}>Continue reading</button>
                </div>
                <NewsToday/>
            </div>
        </section>
    );
}
