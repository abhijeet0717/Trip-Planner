import React from 'react'
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="shadow-lg bg-[#ffffff] sm:p-6 ">
        <div className="md:flex md:justify-center">
        <div className="mb-6 md:mb-0 md:mr-96">
                <Link to="/home" className="flex items-center">
                    <img src={logo} className="h-14 mr-3" alt="FlowBite Logo" />
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 sm:gap-4 sm:grid-cols-3">
                <div>
                    <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">Discover</h2>
                    <ul className="text-gray-800 ">
                        <li className="mb-1">
                        <Link to="/home" className="hover:underline">Home</Link>
                        </li>
                        <li className="mb-1">
                            <Link href="/home" className="hover:underline">About</Link>
                        </li>
                        <li className="mb-1">
                            <Link href="/tours" className="hover:underline">Tours</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">Quick Links</h2>
                    <ul className="text-gray-800">
                        <li className="mb-1">
                            <Link to="/login" className="hover:underline">Login</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="/register" className="hover:underline">Register</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase">Contact</h2>
                    <ul className="text-gray-600 ">
                        <li className="mb-1">
                            <div className="hover:underline"><i className="ri-links-line"></i><span className="text-bold">Address :</span>Gandhi nagar,Jammu</div>
                        </li>
                        <li className="mb-1">
                            <div className="hover:underline"><i className="ri-mail-line"></i><span className="text-bold">Email :</span><a href="mailto:harshgupta2774@gmail.com">harshgupta2774@gmail.com</a></div>
                        </li>
                        <li className="mb-1">
                            <div className="hover:underline"><i className="ri-phone-line"></i><span className="text-bold">Phone :</span><a href="tel:+919541770762">+91-9541770762</a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 md:mr-16 text-bold">
                <a href="https://t.me/harshgupta2774" target="_blank" className="text-gray-800 hover:text-gray-900 ">
                    <i className="ri-facebook-fill"></i>
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="https://www.instagram.com/harshgupta2774" target="_blank" className="text-gray-800 hover:text-gray-900 ">
                    <i className="ri-instagram-line"></i>
                    <span className="sr-only">Instagram page</span>
                </a>
                <div className="text-gray-800 hover:text-gray-900 ">
                    <i className="ri-twitter-line"></i>
                    <span className="sr-only">Twitter page</span><a href="https://t.me/harshgupta2774"></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer