import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Register() {
    const [errorMsg, setErrorMsg] = useState('');
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();

    const registerUser = (data) => {
        console.log(data);
        axios.post('http://localhost:3001/v1/users/register', data).then(registerResponse => {
            console.log(registerResponse);
            const { data: { data } } = registerResponse;
            navigate('/login');
            console.log(data);
        }).catch(error => {
            if (error.response.data?.errorDescription) {
                setErrorMsg(error.response.data.errorDescription);
            }
        });
    }
    const validatePassword = (passwordValue) => {
        if (passwordValue.length < 8) {
            return 'Your password must be at least 8 characters';
        } else if (passwordValue.search(/[a-z]/i) < 0) {
            return 'Your password must contain at least one letter.';
        } else if (passwordValue.search(/[0-9]/i) < 0) {
            return 'Your password must contain at least one digit.';
        }
        return true;
    };
    const passwordValue = watch('password', '');
    const validateConfirmPassword = (confirmPasswordValue) => {
        return confirmPasswordValue === passwordValue;
    };

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <form onSubmit={handleSubmit(registerUser)}>
                        <h2 className="text-center">Register</h2>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">Firstname</label>
                            <input type="text" name='firstName' className="form-control" id="firstName" {...register('firstName', {required: true, minLength: 3, maxLength: 30})} placeholder="Enter Firstname" />
                            {errors.firstName?.type === 'required' && <p className="text-danger">Firstname is required</p>}
                            {errors.firstName?.type === 'minLength' && <p className="text-danger">Minimum 3 characters are required</p>}
                            {errors.firstName?.type === 'maxLength' && <p className="text-danger">Maximum 30 characters is accepted</p>}
                        </div>  
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Lastname</label>
                            <input type="text" className="form-control" id="lastName" {...register('lastName', {required: true})} placeholder="Enter Lastname" />
                            {errors.lastName?.type === 'required' && <p className="text-danger">Lastname is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" {...register('email', {required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/})} onChange={() => setErrorMsg('')} placeholder="Enter Email" />
                            {errors.email?.type === 'required' && <p className="text-danger">Email is required</p>}
                            {errors.email?.type === 'pattern' && <p className="text-danger">Incorrect email format</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" {...register('password', {required: true, validate: validatePassword})} placeholder="Enter Password" />
                            {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
                            {errors.password?.type === 'validate' && <p className="text-danger">{errors.password.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" {...register('confirmPassword', {required: true, validate: validateConfirmPassword})} placeholder="Enter Confirm Password" />
                            {errors.confirmPassword?.type === 'required' && <p className="text-danger">Confirm Password is required</p>}
                            {errors.confirmPassword?.type === 'validate' && <p className="text-danger">Password and Confirm Password doesn't match</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile No</label>
                            <input type="text" className="form-control" id="mobile" {...register('mobile', {required: true})} onChange={() => setErrorMsg('')} placeholder="Enter Mobile No" />
                            {errors.mobile?.type === 'required' && <p className="text-danger">Mobile No is required</p>}
                        </div>
                        <button className="btn btn-success" type="submit">Register</button>
                        {errorMsg && <p className="text-danger">{errorMsg}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;