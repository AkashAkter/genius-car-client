import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const { providerLogin, signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                //get token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true })
                    });

            })
            .catch(error => {
                console.error(error)
                form.reset();
            })
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
                    <div>
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="login" />

                            </div>
                        </form>
                        <p className='text-center'>New to Genius Car? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                    </div>
                    <div className='text-center'>
                        <p>Or</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-block hover:bg-primary">Sign in with Google</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;