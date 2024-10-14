import React from "react";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({
            top:0,
            behavior: "smooth",
    });
    }
  return (
    <div className="bg-slate-200 shadow-md sticky  z-50">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        {/*--------Left section------------ */}
        <div>
            <img className="mb-5 w-40" src='' alt="" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6"> Dream Properties | Your Trusted Real Estate Partner
            Explore a wide range of properties, from luxurious homes to affordable apartments. Dream Properties connects 
            you with the best real estate listings,
            expert guidance, and dedicated customer service.
            Stay updated with the latest property trends and investment opportunities.
            Contact us at [DreamProperties@gmail.com] or call [1-212-456-7890] for personalized assistance.</p>
        </div>

        {/*--------Center section------------ */}
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                
            <li 
                onClick={() => handleNavigation("/") } className='cursor-pointer hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
            
            
            <li 
             onClick={() => handleNavigation("/About") } className='cursor-pointer hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
            

            
            </ul>
        </div>

        {/*--------Right section------------ */}
        <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li className=" hover:text-blue-500 cursor-pointer">+91-8452838905</li>
                    <li className=" hover:text-blue-500 cursor-pointer"> DreamProperties@gmail.com</li>
                </ul>
        </div>
   
      </div>
        {/*--------Copyright Text------------ */}
        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright © 2024 Dream Properties - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;