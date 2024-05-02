"use client";

import styles from "./JobList.module.css";
import { useState, useEffect } from "react";
import JobEntry from "./JobEntry";


export default function JobList() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://660f4b63356b87a55c511eec.mockapi.io/jobs")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No job data</p>;

    return (
        <div id={styles.container}>
            <div id={styles.column_labels}>
                <div id={styles.title_label}>Title</div>
                <div id={styles.author_label}>Author</div>
                <div id={styles.date_label}>Creation date</div>
            </div>
            <div>
                {data && data.length > 0 ? (
                    data.map((job) => <JobEntry job={job} key={job.id} />)
                ) : (
                    <div>No jobs available</div>
                )}
            </div>
        </div>
    );
}
