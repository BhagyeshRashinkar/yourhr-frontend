import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';
const dotenv = require('dotenv');

dotenv.config();

function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleResumeChange = (e) => setResume(e.target.files[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('resume', resume);

        try {
            await axios.post(process.env.BACKURI, formData).then((res)=>{
                if(res.data.message==='1'){
                    navigate('/success');
                }else{
                    alert(res.data.message);
                }
            });
        } catch (error) {
            setMessage('Error uploading resume');
            console.error(error);
        }
    };

    return (
        <div className='container'>
            <h1>YourHR Signup</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <div>
                    <label htmlFor="resume">Resume</label>
                    <input type="file" id="resume" name="resume" onChange={handleResumeChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default SignUp;

