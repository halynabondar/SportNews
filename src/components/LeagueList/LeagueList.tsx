import styles from "./LeagueList.module.css";
import Image from "next/image";

const categories = [
    {title: "Football", image: "/images/Category/Football.png"},
    {title: ["Basket", "Ball"], image: "/images/Category/Basketball.png"},
    {title: "Car Sport", image: "/images/Category/Sport-car.png"},
    {title: ["Table", "Tennis"], image: "/images/Category/Tennis.png"},
];

export default function LeagueList() {
    return (
        <section className={`container ${styles.categorySection}`}>
            <h2 className={styles.category}>Category</h2>

            <div className={styles.grid}>
                {categories.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.titleCard}>
                            <h3>
                                {Array.isArray(item.title)
                                    ? item.title.map((line, index) => (
                                        <span key={index}>
                                        {line}
                                            {index < item.title.length - 1 && <br/>}
                                    </span>
                                    ))
                                    : item.title}
                            </h3>
                        </div>

                        <div className={styles.imageCard}>
                            <Image
                                src={item.image}
                                alt={Array.isArray(item.title) ? item.title.join(" ") : item.title} fill/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
