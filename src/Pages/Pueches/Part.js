import React from 'react';

const Part = ({ part, setProduct }) => {
    const { name, img, slots, discription } = part;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}pic make 1 bundle</span>
                        : <span>No</span>
                }</p>
                <p><small>{slots.length} bundles available for you</small></p>
                <p>{discription}</p>
                <div class="card-actions">

                    <label
                        htmlFor="bye-modal"
                        onClick={() => setProduct(part)}
                        class="btn gap-2 btn-primary rounded-none px-10">
                        Bye Now
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Part;