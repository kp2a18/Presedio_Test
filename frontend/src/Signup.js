import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function Signup() {
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phonenumber: '',
        role: 'Buyer',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.first_name === "" && errors.last_name === "" && errors.email === "" && errors.phonenumber === "" && errors.role === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Signup</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb3'>
                        <label htmlFor="first_name"><strong>First Name</strong></label>
                        <input type="Text" placeholder='Enter First Name' name='first_name'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.first_name && <span className='text-danger'> {errors.first_name}</span>}
                    </div>
                    <div className='mb3'>
                        <label htmlFor="last_name"><strong>Last Name</strong></label>
                        <input type="Text" placeholder='Enter Last Name' name='last_name'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.last_name && <span className='text-danger'> {errors.last_name}</span>}
                    </div>

                    <div className='mb3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>

                    <div className='mb3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>

                    <div className='mb3'>
                        <label htmlFor="phonenumber"><strong>Phone Number</strong></label>
                        <input type="phonenumber" placeholder='Enter Phone Number' name='phonenumber'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.phonenumber && <span className='text-danger'> {errors.phonenumber}</span>}
                    </div>

                    <div className='mb3'>
                        <label htmlFor="role"><strong>Role</strong></label>
                        {errors.role && <span className='text-danger'> {errors.role}</span>}
                        <Form.Select aria-label="Role">
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </Form.Select>
                    </div>
                    <button type='Submit' className='btn btn-success w-100 rounded-0'> Register </button>
                    <p>You are agree to our terms and policies</p>
                    <Link to='/' className='btn btn-default-border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;


