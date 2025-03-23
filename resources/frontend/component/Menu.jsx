import { useState } from "react";

import WhiteLogo from '../../images/landscape-bg-white-1.png';
import Properties from '../../images/properties.png';
import Services from '../../images/accounts_icon 1.svg';
import Review from '../../images/review.png';
import Chat from '../../images/chat.png';
import Support from '../../images/support.png';
import FAQ from '../../images/help.png';
import AboutUs from '../../images/group.png';
import Exit from '../../images/Exit.svg';


const Menu = ({ closeMenu }) => {
    return (
      <div className="bg-white w-[75%] h-full mr-[-150px] p-6 rounded-lg shadow-lg">

        <div className="flex flex-col">
            <div className="flex justify-end transition ">
                <img onClick={closeMenu} src={Exit} width="35px"/>
            </div>
            <img src={WhiteLogo} width="250px" className="mt-[-20px]"/>
        </div>

        <div className="flex flex-col ml-[30px] w-full h-auto gap-8">
            <div className="flex w-full mt-[30px]  items-center gap-6">
                <img src={Properties} alt="Location Icon" width="25px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">Properties</p>
            </div>
            <div className="flex w-full items-center gap-6">
                <img src={Services} alt="Location Icon" width="25px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">Services</p>
            </div>
            <div className="flex w-full items-center gap-6">
                <img src={Review} alt="Location Icon" width="25px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">Reviews</p>
            </div>
            <div className="flex w-full items-center gap-6">
                <img src={Chat} alt="Location Icon" width="25px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">Contact Us</p>
            </div>
            <div className="flex w-full items-center gap-6">
                <img src={Support} alt="Location Icon" width="25px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">Support</p>
            </div>
            <div className="flex w-full items-center gap-6">
                <img src={FAQ} alt="Location Icon" width="25px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">FAQ</p>
            </div>
            <div className="flex w-full items-center gap-6">
                <img src={AboutUs} alt="Location Icon" width="25px" className="ml-[-5px]" />
                <p className="menu-p1 mt-[5px]">About Us</p>
            </div>
        </div>

      </div>
    );
  }
  
  export default Menu;