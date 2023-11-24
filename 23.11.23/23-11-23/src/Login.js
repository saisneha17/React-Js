import { useForm } from 'react-hook-form';

function Login() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const loginUser = (data) => {
        console.log(data);
    }
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <form onSubmit={handleSubmit(loginUser)}>
                        <h2 className="text-center">Login</h2>
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
                        <button className="btn btn-success" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;