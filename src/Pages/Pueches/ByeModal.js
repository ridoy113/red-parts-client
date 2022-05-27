import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const ByeModal = ({ product, setProduct }) => {

    const { _id, name, slots, price } = product;
    const [user] = useAuthState(auth);

    const handleBye = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const bye = {
            partId: _id,
            part: name,
            slot,
            price: price * slot,
            customer: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('https://serene-badlands-91415.herokuapp.com/bye', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bye)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.success) {
                    toast(`${slot} pic parts order complete`)
                }
                else {
                    toast(`${slot} pic parts order complete`)
                }
                setProduct(null);
            })


    }

    return (
        <div>
            <input type="checkbox" id="bye-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle ">
                <div class="modal-box">
                    <label htmlFor="bye-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg text-primary pb-4">{name}</h3>

                    <form
                        onSubmit={handleBye}
                        className='grid grid-cols-1 gap-3 justify-items-center'>

                        <select name="slot"
                            class="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot} pic</option>)
                            }
                        </select>

                        <input type="text" name="name" disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />

                        <input type="email" name="email" disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />

                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered  w-full max-w-xs" />

                        <input type="submit" value="Submit" class="btn btn-primary rounded-none px-16 max-w-xs" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ByeModal;