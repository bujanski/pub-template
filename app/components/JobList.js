// import styles from "./JobListing.module.css";
import JobEntry from "./JobEntry";
async function getData () {
    try {
        const res = await fetch("https://660f4b63356b87a55c511eec.mockapi.io/jobs");
        const jobs = await res.json();
        console.log(res);
        return jobs;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return []; // Return an empty array in case of error
    }
};

export default async function JobList() {
    const  jobs = await getData ();
    return (
        <div>
            {jobs && jobs.length > 0 ? (
                jobs.map((job) => (
                    <JobEntry job={job} key={job.id}/>
                ))
            ) : (
                <div>No jobs available</div>
            )}
        </div>
    );
}
