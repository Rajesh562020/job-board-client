import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './JobDetails.css';

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.BASE_URL_PROD}api/jobs/${id}`)
      .then(res => setJob(res.data));
  }, [id]);

  if (!job) return <p className="loading">Loading...</p>;

  return (
    <div className="job-details-container">
        <Link to="/" className="back-btn">← Back to Jobs</Link>
      <h1 className="job-title">{job.title}</h1>
      <div className="job-meta">
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Type:</strong> {job.type}</p>
        <p><strong>Location:</strong> {job.location}</p>
      </div>
      <p className="job-description"><strong>Description:</strong><br />{job.description}</p>
    </div>
  );
}
