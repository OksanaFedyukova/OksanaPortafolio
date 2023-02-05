import React from 'react';
import { useForm } from 'react-hook-form';
import '../index.css'
import { Typography } from '@mui/material';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>                <Typography  variant="h6" component="h2" >UPDATE </Typography>
   
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Title" {...register("Name", {required: true, maxLength: 80})} />
      <textarea {...register("aboutYou")} placeholder="About you" />
      <input type="submit" />
    </form> 
    </>
  );
}