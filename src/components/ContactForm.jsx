import React from 'react';
import { useForm } from 'react-hook-form';
import '../index.css'
import { Typography } from '@mui/material';


export default function ContactForm() {
  const { register, formState: { errors }, handleSubmit} = useForm({
   mode:'onBlur'
  });
  
  const onSubmit = (data) =>alert(JSON.stringify(data));

  //reset();
  
  return (
    <>                
   <Typography  variant="h6" component="h2" >CONTACT ME</Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
<label> Your Name*
      <input type="text" placeholder="Name" {...register("Name", {required:'Field should not be empty', maxLength: 80, minLength:{
        value:5, message: 'min 5 simbols'
      }
      })} />
     </label>
     <div style={{height:40, mg:20}}> {errors?.Name && <p style={{color:'#f64a25'}}>Field should not be empty</p>}</div>
     <label>Email*
          <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
    </label>
      <div style={{height:40, mb:20}}> {errors?.Email && <p style={{color:'#f64a25'}}>Field should not be empty</p>}</div>
    <label>Subject
      <input type="text" placeholder="Subject" {...register("Subject", {required: false, maxLength: 80})} />
     </label>
      <div style={{height:40, mb:20}}> {errors?.Sunject && <p style={{color:'#f64a25'}}>Field should not be empty</p>}</div>
    <label>Message*
      <textarea {...register("Message")} placeholder="Message" />
      </label>
      <div style={{height:40, mb:20}}> {errors?.Message && <p style={{color:'#f64a25'}}>Field should not be empty</p>}</div>
      <input type="submit" />
    </form> 
    </>
  );
}