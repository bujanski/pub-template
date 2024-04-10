"use client";
import { useState } from 'react'; // Import useState hook to manage state
import styles from "./page.module.css";
import Image from "next/image";
import JobSearchWidget from "@/app/components/JobSearchWidget";
import JobList from "@/app/components/JobList";
import NewJobDialog from "@/app/components/NewJobDialog"; // Import the modal component

export default function UserHome({ params }) {
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    const handleNewJobButtonClick = () => {
        setShowModal(true); // Set showModal state to true when button is clicked
    };

    return (
        <div id={styles.container}>
            <div id={styles.left_rail}>
                <div id={styles.username}>Brock Janssen</div>
                <div
                    id={styles.new_job_button}
                    onClick={handleNewJobButtonClick} // Attach event listener to button click
                >
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
                <JobList />
            </div>
            {/* Render the modal component if showModal state is true */}
            {showModal && <NewJobDialog onClose={() => setShowModal(false)} />}
        </div>
    );
}