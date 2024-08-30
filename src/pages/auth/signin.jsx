import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  roles: yup.string().required('Role is required'),
});

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-purple-500'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Sign in</h2>
        <p className='text-center mb-4'>
          New to Design Me?{' '}
          <a href='#' className='text-blue-500'>
            Sign up for free
          </a>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div>
            <label className='block text-gray-700'>Email address</label>
            <input
              type='email'
              {...register('email')}
              className={`w-full p-2 border rounded mt-1 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className='block text-gray-700'>Password</label>
            <input
              type='password'
              {...register('password')}
              className={`w-full p-2 border rounded mt-1 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <label className='block text-gray-700'>Roles</label>
            <select
              {...register('roles')}
              className={`w-full p-2 border rounded mt-1 ${
                errors.roles ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value=''>Select a role</option>
              <option value='system-admin'>System Administrator</option>
              <option value='scheduler'>Scheduler</option>
              <option value='physician'>Physician</option>
            </select>
            {errors.roles && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.roles.message}
              </p>
            )}
          </div>
          <div>
            <button
              type='submit'
              className='w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition duration-200'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
