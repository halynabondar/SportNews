import styles from "./NewsList.module.css";
import Image from "next/image";

export default function NewsList() {
    return (
        <section className={styles.newsListSection}>
            <div className={styles.newsListColumn}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.newsListTitle}>Latest News</h2>
                    <div className={styles.newsList}>
                        <div className={styles.newsListItem}>
                            <div className={styles.newsListItemImage}>
                                <Image src="/images/News/race.png" alt="Race" fill/>
                            </div>
                            <div className={styles.newsListItemContent}>
                                <p className={styles.newsDate}>Race98 - 03 June 2023</p>
                                <h2 className={styles.newsTitle}>6-Year-Old Horse Dies at Belmont Park After Race
                                    Injury</h2>
                                <p className={styles.newsText}>NEW YORK—A 6-year-old horse died after being injured in a
                                    race at Belmont Park ahead
                                    of next week’s</p>
                            </div>
                        </div>
                        <div className={styles.newsListItem}>
                            <div className={styles.newsListItemImage}>
                                <Image src="/images/News/cyclist.png" alt="Cyclist" fill/>
                            </div>
                            <div className={styles.newsListItemContent}>
                                <p className={styles.newsDate}>Jony.Ls - 03 June 2023</p>
                                <h2 className={styles.newsTitle}>Savilia Blunk Embraces Longer Season with World
                                    Cup</h2>
                                <p className={styles.newsText}>Last year, Savilia Blunk took a more conservative
                                    approach to
                                    her first season as an
                                    Elite Class athlete, skipping some</p>
                            </div>
                        </div>
                        <div className={styles.newsListItem}>
                            <div className={styles.newsListItemImage}>
                                <Image src="/images/News/boxing.png" alt="Boxing" fill/>
                            </div>
                            <div className={styles.newsListItemContent}>
                                <p className={styles.newsDate}>King.F - 03 June 2023</p>
                                <h2 className={styles.newsTitle}>Ryan Garcia is fighting again, this time on social
                                    media</h2>
                                <p className={styles.newsText}>Boxing star Ryan Garcia and his promoter, Hall of Fame
                                    fighter Oscar De La Hoya,
                                    reignited their war of words via Twitter on</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.rectangleImage}>
                        <Image src="/images/News/sportsman.png" sizes="570px" alt="Sportsman" fill/>
                        <button className={styles.newsListItemButton}>Cycling</button>
                        <div className={styles.rectangleContent}>
                            <p className={styles.rectangleDate}>Debits - 03 June 2023</p>
                            <h2 className={styles.rectangleTitle}>DISCOVER THE MEMBER BENEFITS OF USA CYCLING!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
