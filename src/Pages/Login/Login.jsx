import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import login from '../../assets/others/authentication1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(true);
    const { loginUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'User login successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
            setError(error.message)
        })
    }

    const handleCaptchaValidate = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])
    return (
        <div className="hero min-h-screen bg-slate-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center pt-4">Login!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-slate-200" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleCaptchaValidate} type="text" name='captcha' placeholder="type the captcha above" className="input input-bordered bg-slate-200" required />
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn bg-[#D1A054] text-white" type="submit" value="Login" />
                        </div>
                        <p className='py-2'>New to this site? <Link className='text-blue-500 hover:underline' to="/register">Register First</Link> </p>
                        <p className='text-red-600'>{ error }</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;