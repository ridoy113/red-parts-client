import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className='mb-20'>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <h2 className='text-2xl text-primary font-bold text-center my-3'>Welcome To Your Dashboard</h2>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard" className='text-xl'>My Orders</Link></li>
                        <li><Link to="/dashboard/addReview" className='text-xl'>Your Review</Link></li>


                        {admin && <li><Link to="/dashboard/users" className='text-xl'>All Users</Link></li>}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;