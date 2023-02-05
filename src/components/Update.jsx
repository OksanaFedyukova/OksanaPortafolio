import React from 'react';
import { useForm } from 'react-hook-form';
import '../index.css'
import { Typography } from '@mui/material';


export default function UpdteForm() {
  const { register, formState: { errors }, handleSubmit} = useForm({
    mode:'onBlur'
   });
  
  //const onSubmit = (data) =>alert(JSON.stringify(data));
  //reset();
  
  return (
    <>                
   <Typography  variant="h6" component="h2" >CREATE</Typography>
    <form onSubmit={handleSubmit(onSubmit)}>

    <label> Title
      <input type="text" placeholder="NamTitlee" {...register("name", {required:'Field should not be empty', maxLength: 80, minLength:{
        value:5, message: 'min 5 simbols'
      }
      })} />
     </label>
     <div style={{height:40, mg:20}}> {errors?.Name && <p style={{color:'#f64a25'}}>Field should not be empty</p>}</div>


     <label>Description
        <textarea {...register("Description")} placeholder="descrption" />
     </label>
     <div style={{height:40, mg:20}}> {errors?.Description && <p style={{color:'#f64a25'}}>Field should not be empty</p>}</div>
     
     <label>Demo Link 
      <input type="text" placeholder="LinkDemo" {...register("linkDemo", {required: true, pattern: /^\S+@\S+$/i})} />
      </label>
      <div style={{height:40, mb:20}}> {errors?.LinkDemo && <p style={{color:'#f64a25'}}>Field should not be empty</p>}</div>
      <label>Link Repository
      <input type="text" placeholder="githib_Link" {...register("github_link", {required: true, pattern: /^\S+@\S+$/i})} />
      </label>
      <div style={{height:40, mb:20}}> {errors?.github_link && <p style={{color:'#f64a25'}}>Field should not be empty</p>}</div>
      
      
      <label>Poster
      <input type="file" placeholder="Poster" {...register('poster',{required: false, maxLength: 80})} />
      </label>
    <div className="error-message" style={{height:40, marginBottom:20}}> 
     {errors?.poster && <p className="error" style={{color:'#f64a25'}}>Field should not be empty</p>}
   </div>

      <label>Technologies
      <input type="text" placeholder="Technologies" {...register("technologies", {required: false, maxLength: 80})} />
      </label>
      <div style={{height:40, mb:20}}> {errors?.Sunject && <p style={{color:'#f64a25'}}>Field should not be empty</p>}</div>
      
      <input type="submit" />
    </form> 
    </>
  );
}