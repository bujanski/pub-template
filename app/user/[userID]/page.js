import styles from "./page.module.css";
import Image from "next/image";
import JobSearchWidget from "@/app/components/JobSearchWidget";
import JobListing from "@/app/components/JobList";

export default function UserHome({ params }) {
    return (
        <div id={styles.container}>
            <div id={styles.left_rail}>
                <div id={styles.username}>Brock Janssen</div>
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
            <div id={styles.job_pane}>
                <JobSearchWidget />
                <div>list filter options</div>
                <JobListing />
            </div>
        </div>
    );
}
