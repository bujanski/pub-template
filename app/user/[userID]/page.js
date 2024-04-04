import styles from "./page.module.css";
import Image from "next/image";

export default function UserHome({ params }) {
    return (
        <div id={styles.container}>
            <div id={styles.left_rail}>
                <div id={styles.username}>username</div>
                <div id={styles.new_job_button}>
                    <Image
                        src="/library_add.png"
                        width={26}
                        height={26}
                        alt="add to library icon"
                    />
                    new job
                </div>
            </div>
            <div id="job_list">
                <div>search bar</div>
                <div>list filter options</div>
            </div>
        </div>
    );
}
