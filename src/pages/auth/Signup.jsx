import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup.string().required('Phone Number is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  dateOfBirth: yup.date().required('Date of Birth is required'),
  roles: yup.string().required('Role is required'),
});

const SignupForm = () => {
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
    <div className='min-h-screen flex items-center justify-center bg-purple-500 p-4'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-4xl'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
        <p className='text-center mb-4'>
          Do you have an account?{' '}
          <a href='#' className='text-blue-500'>
            Sign in
          </a>
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-2 gap-6'
        >
          <div className='mb-4 col-span-2 sm:col-span-1'>
            <label className='block text-gray-700'>Full Name</label>
            <input
              type='text'
              {...register('fullName')}
              className={`w-full p-2 border rounded mt-1 ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fullName && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div className='mb-4 col-span-2 sm:col-span-1'>
            <label className='block text-gray-700'>Phone No</label>
            <input
              type='text'
              {...register('phone')}
              className={`w-full p-2 border rounded mt-1 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className='mb-4 col-span-2 sm:col-span-1'>
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
          <div className='mb-4 col-span-2 sm:col-span-1'>
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
          <div className='mb-4 col-span-2 sm:col-span-1'>
            <label className='block text-gray-700'>Date of Birth</label>
            <input
              type='date'
              {...register('dateOfBirth')}
              className={`w-full p-2 border rounded mt-1 ${
                errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.dateOfBirth && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>
          <div className='mb-4 col-span-2 sm:col-span-1'>
            <label className='block text-gray-700'>Roles</label>
            <select
              {...register('roles')}
              className={`w-full p-2 border rounded mt-1 ${
                errors.roles ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value=''>Select a role</option>
              <option value='admin'>Admin</option>
              <option value='user'>User</option>
            </select>
            {errors.roles && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.roles.message}
              </p>
            )}
          </div>
          <div className='col-span-2'>
            <button
              type='submit'
              className='w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition duration-200'
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
