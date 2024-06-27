import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input type="text" {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label>Message</label>
          <textarea {...register('message')} />
          <p>{errors.message?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
