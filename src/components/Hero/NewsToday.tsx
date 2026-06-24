import styles from "@/components/Hero/Hero.module.css";
import Image from "next/image";

export default function NewsToday() {
    return (
        <div className={styles.newsToday}>
            {/*<div></div>*/}
            <div>
                <button className={styles.button}>Today</button>
            </div>
            <div className={styles.news}>
                <Image src="/images/news1.png" alt="News Today" width={270} height={233}
                       className={styles.newsImage}/>
                <p className={styles.newsDate}>Race98 - 03 June 2023</p>
                <h2 className={styles.newsTitle}>Ethiopian runners took the top four spots.</h2>
            </div>
            <div className={styles.news}>
                <Image src="/images/news2.png" alt="News Today" width={270} height={233}
                       className={styles.newsImage}/>
                <p className={styles.newsDate}>INDYCAR - 03 June 2023</p>
                <h2 className={styles.newsTitle}>IndyCar Detroit: Dixon quickest in second practice</h2>
            </div>
        </div>
    )
}