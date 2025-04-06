import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import WhiteLogo from '../../images/landscape-bg-white-1.png';
import Home from '../../images/icons/16.png';
import Properties from '../../images/icons/17.png';
import Services from '../../images/icons/18.png';
import Support from '../../images/icons/19.png';
import AboutUs from '../../images/icons/20.png';
import Exit from '../../images/Exit.svg';


const Menu = ({ closeMenu }) => {
    const navigate = useNavigate();

    return (
      <div className="bg-white w-[75%] h-full fixed z-[50] top-0 right-0 p-6 rounded-lg shadow-lg">

        <div className="flex flex-col mt-[10px] mx-[10px]">
            <div className="flex justify-end transition ">
                <img onClick={closeMenu} src={Exit} width="35px"/>
            </div>
            <img src={WhiteLogo} width="200px" className="mt-[-50px]"/>
        </div>

        <div className="flex flex-col mt-[20px] ml-[20px] w-full h-auto gap-4">
            <div onClick={() => navigate('/')} className="flex w-full items-center gap-6 cursor-pointer">
                <img src={Home} alt="Location Icon" width="55px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">Home</p>
            </div>
            <div onClick={() => navigate('/properties')} className="flex w-full items-center gap-6 cursor-pointer">
                <img src={Properties} alt="Location Icon" width="55px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">Properties</p>
            </div>
            <div className="flex w-full items-center gap-6 opacity-50 cursor-pointer">
                <img src={Services} alt="Location Icon" width="55px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">Services</p> 
            </div>
            <div className="flex w-full items-center gap-6 opacity-50 cursor-not-allowed">
                <img src={Support} alt="Location Icon" width="55px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">Support</p>
            </div>
            <div className="flex w-full items-center gap-6 opacity-50 cursor-not-allowed">
                <img src={AboutUs} alt="Location Icon" width="55px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">About Us</p>
            </div>
        </div>

      </div>
    );
  }
  
  export default Menu;