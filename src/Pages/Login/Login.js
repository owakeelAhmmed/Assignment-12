import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loding from '../Shared/Loading';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const [
    signInWithEmailAndPassword,
    user,
    loading,    
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  let signInError;

  if( loading || gLoading){
    return <Loding/>
  }

  if(user || gUser){
    navigate(from, {replace: true});
  }

  if( error || gError){
    signInError= <p className='text-red-600 text-center'><small>{error?.message || gError?.message}</small></p>
  }
  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
  }

  return (
    <section className='bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-300'>
      <div className='flex h-screen justify-center items-center'>
      <div className=" card w-96 border-gray-400 shadow-2xl ">
          <div className="card-body">
            <h2 className=" text-white text-center font-bold text-3xl">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-primary"></span>
                  </label>
                  <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input input-bordered w-full max-w-xs" 
                  {...register("email", {
                    required:{
                      value: true,
                      message: 'Email is Required'
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Enter a valid Email' 
                    }
                  })}
                  />
                  <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt font-bold text-red-600">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt font-bold text-red-600">{errors.email.message}</span>}
                  </label>
            </div>
            <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-primary"></span>
                  </label>
                  <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="input input-bordered w-full max-w-xs" 
                  {...register("password", {
                    required:{
                      value: true,
                      message: 'Password is Required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters' 
                    }
                  })}
                  />
                  <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt font-bold text-red-600">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt font-bold text-red-600">{errors.password.message}</span>}
                  </label>
            </div>
                  {signInError}

                <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
          </form>
                  <small className='text-center text-primary font-bold mt-2'>New to Super-Gear? <Link to='/signup' className="text-white">Create New Account</Link></small>
            <div className="divider text-white co">OR</div>
            
            <button 
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-primary">
              Continue with google
              </button>
          </div>
        </div>
    </div>
    </section>
  );
};

export default Login;