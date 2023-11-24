import { useForm } from 'react-hook-form';

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const registerUser = (data) => {
        console.log(data);
    }
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <form onSubmit={handleSubmit(registerUser)}>
                        <h2 className="text-center">Register</h2>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">Firstname</label>
                            <input type="text" className="form-control" id="firstName" {...register('firstName', {required: true, minLength: 3, maxLength: 30})} placeholder="Enter Firstname" />
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
                            <input type="email" className="form-control" id="email" {...register('email', {required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/})} placeholder="Enter Email" />
                            {errors.email?.type === 'required' && <p className="text-danger">Email is required</p>}
                            {errors.email?.type === 'pattern' && <p className="text-danger">Incorrect email format</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" {...register('password', {required: true})} placeholder="Enter Password" />
                            {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="password" {...register('password', {required: true})} placeholder="Enter Password" />
                            {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile No</label>
                            <input type="text" className="form-control" id="mobile" {...register('mobile', {required: true})} placeholder="Enter Mobile No" />
                            {errors.mobile?.type === 'required' && <p className="text-danger">Mobile No is required</p>}
                        </div>
                        <button className="btn btn-success" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;