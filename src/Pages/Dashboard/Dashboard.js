import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;