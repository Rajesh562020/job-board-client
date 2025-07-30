import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL_PROD}api/jobs`)
            .then((res) => setJobs(res.data));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Naukri Board</h1>
            <Link to="/add-job" className="add-job-btn">Add Job</Link>
            <div className="job-list">
                {jobs.map((job) => (
                    <div key={job._id} className="job-card">
                        <h2>{job.title}</h2>
                        <p>{job.company} — {job.location}</p>
                        <p>Type: {job.type}</p>
                        <Link to={`/job/${job._id}`}>View Details</Link>
                    </div>
                ))}


            </div>

        </div>
    );
}
