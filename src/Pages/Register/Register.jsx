import React, { useContext, useState } from 'react';
import register from '../../assets/others/authentication2.png'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const { signUpUser, updateUserProfile, logOut } = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        signUpUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'User has been created successfully.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                updateUserProfile(name, photo)
                    .then()
                    .catch(error => setError(error.message))
                form.reset();
                logOut()
                    .then()
                    .catch(error => setError(error.message))
                navigate('/login')
            })
            .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-slate-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img src={register} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center pt-4">Please Register!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered bg-slate-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="photo url" className="input input-bordered bg-slate-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered bg-slate-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-slate-200" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#D1A054] text-white" type="submit" value="Register" />
                        </div>
                        <p className='py-2'>Already have an account? <Link className='text-blue-500 hover:underline' to="/login">Login Now</Link> </p>
                        
                        <p className='text-red-600'>{ error }</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;