import React from 'react'
import { useForm } from 'react-hook-form';
import Header from '../components/header/Header'

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
    <Header/>
    <div style={{backgroundColor:'#d7ccc8 '}}>
    <div className='contact-part'>
    <p>If you can't find what you are looking for on our site,feel free to contactus by phone or email. </p>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="text"
          {...register('phone', { required: true })}
        />
        {errors.phone && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="comment">Comment or Question</label>
        <textarea
          id="comment"
          {...register('comment', { required: true })}
        ></textarea>
        {errors.comment && <span>This field is required</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
    
    </div>
    

    </div>
  )
}

export default ContactUs