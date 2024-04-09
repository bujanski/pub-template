import styles from "./JobEntry.module.css";

export default function JobEntry({ job }) {
    // Function to format date to MM-DD-YYYY
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.getMonth() + 1; // Months are 0 indexed
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}-${year}`;
    };

    return (
        <div id={styles.container}>
            <div className={styles.job_title}>
                {job.title}
            </div>
            <div className={styles.job_author}>
                {job.author}
            </div>
            <div className={styles.job_date} >
                {formatDate(job.createdAt)}
            </div>
        </div>
    );
}
