import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './AddJob.css'; 

export default function AddJob() {
  const [form, setForm] = useState({
    title: '',
    company: '',
    type: '',
    location: '',
    description: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_BASE_URL_PROD}api/jobs`, form);
    navigate('/');
  };

  return (
    <div className="form-container">
       <Link to="/" className="back-btn">← Back to Jobs</Link>
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Job Title" onChange={handleChange} required />
        <input name="company" placeholder="Company Name" onChange={handleChange} required />
        <input name="type" placeholder="Full-time / Part-time" onChange={handleChange} required />
        <input name="location" placeholder="Location" onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
