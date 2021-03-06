import React from 'react';
import logo2 from '../../img/logo2.png'

const Footer = () => {
    return (
        <div className='bg-base-300'>
            <footer class="footer p-10 text-base-content ">
                <div>
                    <span class="footer-title">
                        <img src={logo2} alt="" />
                    </span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span class="footer-title">Newsletter</span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text">Enter your email address</span>
                        </label>
                        <div class="relative">
                            <input type="text" placeholder="username@site.com" class="input rounded-none input-bordered w-full pr-16" />
                            <button class="btn btn-primary rounded-none absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='text-center pb-10'>
                <p> Copyright ?? 2022 - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;