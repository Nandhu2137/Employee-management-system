import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Updateemployee(){
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Location, setLocation] = useState('')
    const [Email, setEmail] = useState('')
    const [DOB, setDOB] = useState('')
    const [Education, setEducation] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update' +id, {FirstName, LastName, Location, Email, DOB, Education})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update employee Details</h2>
                <div className='mb-2'>
                    <label htmlfor="">FirstName:</label>
                    <input type="text" placeholder='Enter your Fname' className='form-control' 
                    onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlfor="">LastName:</label>
                    <input type="text" placeholder='Enter your Lname' className='form-control' 
                    onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlfor="">Location:</label>
                    <input type="text" placeholder='Enter address' className='form-control' 
                    onChange={e => setLocation(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlfor="">Email:</label>
                    <input type="email" placeholder='abc@gmail.com' className='form-control' 
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlfor="">DOB:</label>
                <input type="date" className='form-control' 
                onChange={e => setDOB(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlfor="">Education:</label>
                    <input type="text" placeholder='Enter your Graducation' className='form-control' 
                    onChange={e => setEducation(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlfor="">About:</label>
                    <textarea placeholder='Enter your Graducation' className='form-control'/>
                </div>
                
                    <button className="btn btn-success">Update</button>
            </form>
        </div>
   </div>
    )}

export default Updateemployee;