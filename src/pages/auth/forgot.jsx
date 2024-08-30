import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password is required'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm New Password is required'),
});

const ForgotPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-purple-500'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div>
            <div className='flex justify-between items-center'>
              <label className='block text-gray-700'>New Password</label>

              <span
                onClick={togglePasswordVisibility}
                className=' top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600'
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('newPassword')}
                className={`w-full p-2 border rounded mt-1 ${
                  errors.newPassword ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.newPassword && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div>
            <label className='block text-gray-700'>Confirm New Password</label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('confirmNewPassword')}
                className={`w-full p-2 border rounded mt-1 ${
                  errors.confirmNewPassword
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
            </div>
            {errors.confirmNewPassword && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.confirmNewPassword.message}
              </p>
            )}
          </div>
          <div>
            <button
              type='submit'
              className='w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition duration-200'
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
