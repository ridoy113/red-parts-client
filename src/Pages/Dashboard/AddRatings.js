import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddRatings = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'dc5aa2535ee480deaf6e3a096fb9ec0b'



    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const rating = {
                        name: data.name,
                        email: data.email,
                        comments: data.comments,
                        img: img
                    }

                    fetch('http://localhost:5000/rating', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(rating)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Your Review Added Successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed The Add You Review');
                            }
                        })
                }

            })

    };


    return (
        <div>
            <h2 className='font-bold pl-6 pb-4'>Add Your Review</h2>
            <form className='ml-3' onSubmit={handleSubmit(onSubmit)}>


                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>


                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>

                    <input
                        type="email"
                        placeholder="Your Email"
                        class="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a Valid Email'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>


                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Your Comments</span>
                    </label>

                    <textarea
                        type="text"
                        placeholder="Type our Comment..."
                        class="input input-bordered w-full max-w-xs"
                        {...register("comments", {
                            required: {
                                value: true,
                                message: 'Comments is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.comments.message}</span>}

                    </label>
                </div>


                <div class="form-control w-full max-w-xs mt-5">
                    <label class="label">
                        <span class="label-text">Please Add Your Photo</span>
                    </label>
                    <input
                        type="file"
                        class="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.image.message}</span>}

                    </label>
                </div>


                <input className='btn btn-primary w-full max-w-xs mt-5' type="submit" value="Add" />

            </form>
        </div>
    );
};

export default AddRatings;