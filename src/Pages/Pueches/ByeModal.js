import React from 'react';

const ByeModal = ({ product, setProduct }) => {

    const { _id, name, slots } = product;

    const handleBye = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setProduct(null);
    }

    return (
        <div>
            <input type="checkbox" id="bye-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle ">
                <div class="modal-box">
                    <label for="bye-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg text-primary pb-4">{name}</h3>

                    <form
                        onSubmit={handleBye}
                        className='grid grid-cols-1 gap-3 justify-items-center'>

                        <select name="slot"
                            class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot} pic</option>)
                            }
                        </select>

                        <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />

                        <input type="email" name="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />

                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered  w-full max-w-xs" />

                        <input type="submit" value="Submit" class="btn btn-primary rounded-none px-16 max-w-xs" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ByeModal;