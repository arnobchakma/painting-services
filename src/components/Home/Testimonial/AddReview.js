import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddReview = () => {
   const [images, setImages] = useState(null);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   // Handle Form Submit
   const onSubmit = e => {
      const data = { ...e, image: images };
      fetch('https://cryptic-basin-05682.herokuapp.com/addReviews', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ data }),
      });
      window.location.reload();
   };

   // Handle Image upload from Image bb
   const imageUpload = e => {
      e.preventDefault();
      const formData = new FormData();
      formData.set('key', '7599ed5a49272ab4580b36f02f0f45d7');
      formData.append('image', e.target.files[0]);
      axios
         .post('https://api.imgbb.com/1/upload', formData)
         .then(res => {
            setImages(res.data.data.display_url);
         })
         .catch(error => {
            console.log(error);
         });
   };

   return (
      <section className="justify-content-center">
         <div className="container-fluid row ">
            <div className="col-md-3">
               <Sidebar />
            </div>

            <div className="col-md-9">
               <h5 className="font-color normal-text-color my-5">Add Your Opinion </h5>

               <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="form-label normal-text-color">Your Name:</label>
                  <input
                     {...register('author', { required: true })}
                     id="name"
                     className="form-control"
                     required
                  />

                  <label className="form-label normal-text-color mt-4">Your Position:</label>
                  <input
                     {...register('position', { required: true })}
                     id="name"
                     className="form-control"
                     required
                  />

                  <label className="form-label block normal-text-color mt-4">Add Your Review:</label>
                  <textarea
                     {...register('description', { required: true })}
                     className="form-control"
                     rows="4"
                     id="comments"
                     required
                  ></textarea>{' '}

                  <input type="file" onChange={imageUpload} className="my-4 d-block" />
                  <button className="p-1" type="submit" >Review</button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddReview;
