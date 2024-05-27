import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './PropertFormValidation';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function PropertyForm() {
    const [values, setValues] = useState({
        title: '',
        address: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        price: '',
        description: '',
        nearbyHospitals: '',
        nearbyColleges: '',
        contact: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.first_name === "" && errors.last_name === "" && errors.email === "" && errors.phonenumber === "" && errors.role === "" && errors.password === "") {
            axios.post('http://localhost:8081/propertyform', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Property Form</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb3'>
                        <label htmlFor="title"><strong>Title</strong></label>
                        <input type="Text" placeholder='Enter Title' name='title'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.title && <span className='text-danger'> {errors.title}</span>}
                    </div>
                    <div className='mb3'>
                        <label htmlFor="address"><strong>Address</strong></label>
                        <input type="Text" placeholder='Enter Address' name='address'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.address && <span className='text-danger'> {errors.address}</span>}
                    </div>

                    <div className='mb3'>
                        <label htmlFor="area"><strong>Area</strong></label>
                        <input type="area" placeholder='Enter area' name='area'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.area && <span className='text-danger'> {errors.area}</span>}
                    </div>

                    <div className='mb3'>
                        <label htmlFor="bedrooms"><strong>Bedrooms</strong></label>
                        {errors.bedrooms && <span className='text-danger'> {errors.bedrooms}</span>}
                        <Form.Select aria-label="Bedrooms">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Select>
                    </div>

                    <div className='mb3'>
                        <label htmlFor="bathrooms"><strong>Bathrooms</strong></label>
                        {errors.bathrooms && <span className='text-danger'> {errors.bathrooms}</span>}
                        <Form.Select aria-label="Bathrooms">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Select>
                    </div>

                    <div className='mb3'>
                        <label htmlFor="price"><strong>Price</strong></label>
                        <input type="number" placeholder='Enter Price' name='pricer'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.price && <span className='text-danger'> {errors.price}</span>}
                    </div>

                    <div className='mb3'>
                        <label htmlFor="description"><strong>Description</strong></label>
                        <input type="description" placeholder='Enter Description' name='description'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.description && <span className='text-danger'> {errors.description}</span>}
                    </div>

                    <div className='mb3'>
                        <label htmlFor="nearbyhospitals"><strong>NearByHospitals</strong></label>
                        <input type="nearbyhospitals" placeholder='Enter NearByHospitals' name='nearbyhospitals'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.nearbyhospitals && <span className='text-danger'> {errors.nearbyhospitals}</span>}
                    </div>

                    <div className='mb3'>
                        <label htmlFor="nearbycollege"><strong>NearByCollege</strong></label>
                        <input type="nearbycollege" placeholder='Enter NearByCollege' name='nearbycollege'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.nearbycollege && <span className='text-danger'> {errors.nearbycollege}</span>}
                    </div>

                    <div className='mb3'>
                        <label htmlFor="phonenumber"><strong>PhoneNumber</strong></label>
                        <input type="phonenumber" placeholder='Enter PhoneNumber' name='phonenumber'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.phonenumber && <span className='text-danger'> {errors.phonenumber}</span>}
                    </div>
                    <button type='Submit' className='btn btn-success w-100 rounded-0'> Save Property </button>
                    <p>You are agree to our terms and policies</p>
                    <Link to='/propertylist' className='btn btn-default-border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default PropertyForm;


