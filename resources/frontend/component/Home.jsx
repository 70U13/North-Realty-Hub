import { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate, Link } from 'react-router-dom'
import apiService from '../component/servicesApi/apiService.js'; 
import axios from 'axios';
import LSLogoWhite from '../../images/landscape-bg-blue-2.png';
import LSLogoBlue from '../../images/logo/updated-landscape-logo (1).png';
import HomeBG from '../../images/bg/13.svg';
import Menu from '../../images/hamburgermenu.svg';
import HeadImg from '../../images/2.jpg';
import PreviewImg from '../../images/3.jpg';
import ReviewImg from '../../images/1.jpg';
import QStart from '../../images/quote-start.svg';
import QEnd from '../../images/quote-end.svg';
import PreviewText from '../../images/previewText.svg';
import IconEmail from '../../images/icons/22.png';
import IconPhone from '../../images/icons/24.png';
import RightArrow from '../../images/right_arrow_icon 1.svg';
import LocatorIcon from '../../images/icons/11.png';
import BedIcon from '../../images/icons/5.png';
import KitchenIcon from '../../images/icons/7.png';
import BathroomIcon from '../../images/icons/9.png';
import Header1 from '../../images/header 1.svg';
import HomeOffer from '../../images/home_icon 1.svg';
import AccountOffer from '../../images/accounts_icon 1.svg';
import VerifiedOffer from '../../images/ok_icon 1.svg';
import DealsOffer from '../../images/deals_icon 1.svg';
import Account from '../../images/icons/21.png';
import Header2 from '../../images/header 2.svg';
import HamburgerMenu from './Menu.jsx';
import Socials1 from '../../images/socials-icon/26.png';
import Socials2 from '../../images/socials-icon/25.png';
import Socials3 from '../../images/socials-icon/27.png';
import Copyright from '../../images/socials-icon/copyright.png';
import ReviewAccount from '../../images/icons/21.png';
import WWU1 from '../../images/rental.png';
import WWU2 from '../../images/partner.png';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { mdiArrowRight } from '@mdi/js';
import { mdiArrowDownDropCircle } from '@mdi/js';
import { fetchFaqs } from '../component/servicesApi/faqApi';

const Home = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigateContact = () => {
        navigate('/contact-us');
    };

    const navigateAdmin = () => {
        navigate('/admin');
    };

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const dropdownRef = useRef(null);

    const options = ["Option 1", "Option 2", "Option 3"];

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const carouselRef = useRef(null);

    const scrollByCard = (direction) => {
    const container = carouselRef.current;
    const cardWidth = 600 + 24; // card width + gap (Tailwind: w-[300px] + space-x-6 = 1.5rem (24px))

    if (container) {
        container.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth',
        });
    }
    };

  return (
    <>
    
    <div className='flex flex-col justify-center items-center w-full bg-[#AFD9FF] h-auto'>

        {/* NAVBAR HEADER */}
        <div className="top-0 sticky z-50 bg-[#AFD9FF] justify-center items-center w-full">
            <div className="relative z-2 py-[20px] px-[30px] lg:px-[50px] gap-10 flex justify-between items-center">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={LSLogoBlue} alt="Logo" className="w-[200px] lg:w-[250px]" />
                </Link>

                <div className="hidden lg:flex flex flex-row justify-center items-center gap-6">
                    <div className="bg-white w-[120px] h-[32px] rounded-[20px] flex items-center justify-center self-center">
                        <p className="h-tabs-p1 text-center cursor-pointer hover:underline">Apartment</p>
                    </div>
                    <p className="h-tabs-p1 text-center cursor-pointer hover:underline">For Landlords</p>
                    <div onClick={navigateContact} className="bg-[#0C2C55] w-[115px] h-[32px] rounded-[20px] flex items-center justify-center self-center">
                        <p className="h-tabs-p2 text-center cursor-pointer hover:underline">Contact Us</p>
                    </div>
                    <div onClick={navigateAdmin} className="p-1 items-center justify-center rounded-full bg-white cursor-pointer">
                        <img src={Account} alt="Logo" className="w-[23px]"  />
                    </div>
                </div>
                
                <img onClick={() => setIsMenuOpen(true)} src={Menu} className="block lg:hidden lg:px-[] xl:mx-[50px]" width="40px" height="31px" /> {/*sm:opacity-0*/}
            </div>
        </div>

        {/* MAIN HEADER */}
        <div className=" w-full max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] mx-6 flex flex-col mt-[80px] mb-[100px] gap-16">
            
            <div className='flex flex-col w-auto h-auto text-center justify-center items-center gap-6'>
                <p className='h-top-p1 leading-[30px] md:leading-[40px] lg:leading-[50px] xl:leading-[70px] tracking-[3px]
                text-[26px] md:text-[40px] lg:text-[50px] xl:text-[60px]'> Guiding Families Home, <br /> One Dream At A Time 🏡</p>

                <p className='h-top-p2 leading-[20px] md:leading-[40px] lg:leading-[55px] xl:leading-[70px] tracking-[1px]
                text-[24px] md:text-[30px] lg:text-[30px] xl:text-[35px] text-[#0C2C55]/70'>rent, buy, or sell?</p>
            </div>

            {/* CATEGORIES */}
            <div className="flex flex-row px-6 md:px-10 lg:px-12 xl:px-14 gap-4 md:gap-6 lg:gap-8 xl:gap-12 w-full max-w-[1500px] mx-auto bg-white rounded-full justify-center items-center shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)]">

                {/* Catgeory 1 */}
                <div className="flex flex-row py-[20px] w-full max-w-[550px]">
                    <div className="flex flex-col w-full">
                        <p className="h-category-p1 md:tracking-[1px]
                        text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px]">LOCATION</p>
                        <div className="flex flex-col-2 items-center">
                            <div className="relative w-full" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='h-category-p2 tracking-[1px] text-[#0C2C55] 
                                    text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]
                                    flex justify-between flex-row w-full text-left bg-white'>
                                    {selected || "Select your city"}
                                    
                                </button>

                                {/* Dropdown options */}
                                {isOpen && (
                                <ul className="h-category-op1 absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                    {options.map((option) => (
                                    <li
                                        key={option}
                                        onClick={() => handleSelect(option)}
                                        className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">
                                        {option}
                                    </li>
                                    ))}
                                </ul>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#0C2C55] border"></div>
                </div>

                {/* Catgeory 2 */}
                <div className="flex flex-row py-[20px] w-full max-w-[550px]">
                    <div className="flex flex-col w-full">
                        <p className="h-category-p1 md:tracking-[1px]
                        text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px]">PROPERTY TYPE</p>
                        <div className="flex flex-col-2 items-center">
                            <div className="relative w-full" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='h-category-p2 tracking-[1px] text-[#0C2C55] 
                                    text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]
                                    flex justify-between flex-row w-full text-left bg-white'>
                                    {selected || "Choose property type"}
                                </button>

                                {/* Dropdown options */}
                                {isOpen && (
                                <ul className="h-category-op1 absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                    {options.map((option) => (
                                    <li
                                        key={option}
                                        onClick={() => handleSelect(option)}
                                        className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">
                                        {option}
                                    </li>
                                    ))}
                                </ul>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#0C2C55] border"></div>
                </div>

                {/* Catgeory 3 */}
                <div className="flex flex-row py-[20px] w-full max-w-[550px]">
                    <div className="flex flex-col w-full">
                        <p className="h-category-p1 md:tracking-[1px]
                        text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px]">AGENTS</p>
                        <div className="flex flex-col-2 items-center">
                            <div className="relative w-full" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='h-category-p2 tracking-[1px] text-[#0C2C55]
                                    text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]
                                    flex justify-between flex-row w-full text-left bg-white'>
                                    {selected || "Find your agent"}
                                </button>

                                {/* Dropdown options */}
                                {isOpen && (
                                <ul className="h-category-op1 absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                    {options.map((option) => (
                                    <li
                                        key={option}
                                        onClick={() => handleSelect(option)}
                                        className="px-4 py-2 hover:bg-indigo-100 cursor-pointer">
                                        {option}
                                    </li>
                                    ))}
                                </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#0C2C55] w-full max-w-[80px] md:max-w-[120px] lg:max-w-[160px] xl:max-w-[200px] h-auto 
                    px-4 py-4 md:py-6 lg:py-6 xl:py-8 rounded-full justify-center items-center cursor-pointer">
                    <p className="h-category-btn w-auto justify-center items-center text-center text-[10px] md:text-[14px] lg:text-[18px] xl:text-[22px]">View homes</p>
                </div>
            </div>

        </div>

        {/* MAIN CONTENT */}
        <div className='flex flex-col h-auto justify-center items-center relative w-full h-auto z-2 bg-[#EFF8FF] text-white'>

            {/* CONTENT - 1 - NEW PROPERTIES CAROUSEL */}
            <div className='w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1260px]
             h-auto mt-[100px] mx-auto overflow:hidden flex flex-col justify-center items-center'>
                <div className='flex flex-col md:flex-row gap-8 text-center md:text-left justify-between items-center w-full max-w-[1500px] h-auto'>
                    <div className="flex flex-col gap-2 lg:gap-2 xl:gap-4">
                        <p className='text-[28px] lg:text-[28px] xl:text-[36px] text-[#A9A9A9]/70 h-content-new-property-p1'>Property curated Collections</p>
                        <p className='text-[20px] lg:text-[26px] xl:text-[32px] h-content-new-property-p2'>Find the home that fits your needs</p>
                    </div>
                    
                    <div className='flex justify-center gap-2 cursor-pointer justify-items-center'>
                        <Icon onClick={() => scrollByCard(-1)} path={mdiArrowLeft} size={2.3} color="#0C2C55" className="p-3 rounded-full shadow-md bg-white"/>
                        <Icon onClick={() => scrollByCard(1)} path={mdiArrowRight} size={2.3} color="#0C2C55" className="p-3 rounded-full shadow-md bg-white"/>
                    </div>
                </div>

                <div className="flex relative w-full h-auto mt-[15px]">
                    {/* Scrollable Container */}
                    <div
                        ref={carouselRef}
                        className="p-4 flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory space-x-6 transition-all duration-500 scroll-smooth w-full"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {/* Card Wrapper */}
                        <div className="flex flex-nowrap space-x-6">
                            {/* Card 1 */}  
                            <div className="flex-shrink-0 w-[400px] group cursor-pointer">
                            <div className="h-[440px] 
                                flex flex-col items-center bg-white rounded-[20px] shadow-md snap-center
                                scale-95 group-hover:scale-100 group-hover:shadow-md
                                transition-all duration-500 ease-out">
                                
                                <img src={ReviewImg} alt="Review Image" className="w-full rounded-[10px] rounded-b-none" />
                                
                                <div className="flex flex-col w-full gap-12 py-6 px-8 justify-between">
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-left">Php 10,000 per month</p>
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p3 text-left">2 Rooms - 4 Adults - 50m2</p>
                                    </div>
                                </div>
                            </div>
                            </div>

                            {/* Card 2 */}  
                            <div className="flex-shrink-0 w-[400px] group cursor-pointer">
                            <div className="h-[440px] 
                                flex flex-col items-center bg-white rounded-[20px] shadow-md snap-center
                                scale-95 group-hover:scale-100 group-hover:shadow-md
                                transition-all duration-500 ease-out">
                                
                                <img src={ReviewImg} alt="Review Image" className="w-full rounded-[10px] rounded-b-none" />
                                
                                <div className="flex flex-col w-full gap-12 py-6 px-8 justify-between">
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-left">Php 10,000 per month</p>
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p3 text-left">2 Rooms - 4 Adults - 50m2</p>
                                    </div>
                                </div>
                            </div>
                            </div>

                            {/* Card 3 */}  
                            <div className="flex-shrink-0 w-[400px] group cursor-pointer">
                            <div className="h-[440px] 
                                flex flex-col items-center bg-white rounded-[20px] shadow-md snap-center
                                scale-95 group-hover:scale-100 group-hover:shadow-md
                                transition-all duration-500 ease-out">
                                
                                <img src={ReviewImg} alt="Review Image" className="w-full rounded-[10px] rounded-b-none" />
                                
                                <div className="flex flex-col w-full gap-12 py-6 px-8 justify-between">
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-left">Php 10,000 per month</p>
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p3 text-left">2 Rooms - 4 Adults - 50m2</p>
                                    </div>
                                </div>
                            </div>
                            </div>

                            {/* Card 4 */}  
                            <div className="flex-shrink-0 w-[400px] group cursor-pointer">
                            <div className="h-[440px] 
                                flex flex-col items-center bg-white rounded-[20px] shadow-md snap-center
                                scale-95 group-hover:scale-100 group-hover:shadow-md
                                transition-all duration-500 ease-out">
                                
                                <img src={ReviewImg} alt="Review Image" className="w-full rounded-[10px] rounded-b-none" />
                                
                                <div className="flex flex-col w-full gap-12 py-6 px-8 justify-between">
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-left">Php 10,000 per month</p>
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p3 text-left">2 Rooms - 4 Adults - 50m2</p>
                                    </div>
                                </div>
                            </div>
                            </div>

                            {/* Card 5 */}  
                            <div className="flex-shrink-0 w-[400px] group cursor-pointer">
                            <div className="h-[440px] 
                                flex flex-col items-center bg-white rounded-[20px] shadow-md snap-center
                                scale-95 group-hover:scale-100 group-hover:shadow-md
                                transition-all duration-500 ease-out">
                                
                                <img src={ReviewImg} alt="Review Image" className="w-full rounded-[10px] rounded-b-none" />
                                
                                <div className="flex flex-col w-full gap-12 py-6 px-8 justify-between">
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-left">Php 10,000 per month</p>
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p3 text-left">2 Rooms - 4 Adults - 50m2</p>
                                    </div>
                                </div>
                            </div>
                            </div>

                            {/* Card 6 */}  
                            <div className="flex-shrink-0 w-[400px] group cursor-pointer">
                            <div className="h-[440px] 
                                flex flex-col items-center bg-white rounded-[20px] shadow-md snap-center
                                scale-95 group-hover:scale-100 group-hover:shadow-md
                                transition-all duration-500 ease-out">
                                
                                <img src={ReviewImg} alt="Review Image" className="w-full rounded-[10px] rounded-b-none" />
                                
                                <div className="flex flex-col w-full gap-12 py-6 px-8 justify-between">
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-left">Php 10,000 per month</p>
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <p className="h-content-property-card-p3 text-left">2 Rooms - 4 Adults - 50m2</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* CONTENT - HEADER 1 */}
            <div className='w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1260px]
             mt-[150px] mx-auto flex flex-col px-4 gap-4 h-content-review px-4'>
                <p className="text-[24px] md:text-[20px] lg:text-[24px] xl:text-[38px]
                leading-[35px] md:leading-[30px] xl:leading-[45px]
                h-headers-p1 text-left">Finding your next home is easy with fully furnished options, trusted listings, and friendly, stress-free support.</p>
            </div>

            {/* CONTENT - 2 - OFFERS */}
            <div className='w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1260px]
            h-auto mt-[50px] md:mt-[100px] flex flex-col md:flex-row justify-center px-16 md:px-8 gap-6 sm:gap-6 xl:gap-12'>
                <div className="flex flex-col text-left gap-6">
                    <img src={HomeOffer} alt='Home Icon' width="50px"/>
                    <p className='h-offers-p1 text-[24px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] 
                    leading-[14px] sm:leading-[16px] md:leading-[20px] lg:leading-[25px] xl:leading-[25px]'>Home Tour</p>
                    <p className='h-offers-p2 text-[18px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] 
                    leading-[20px] sm:leading-[16px] md:leading-[20px] lg:leading-[25px] xl:leading-[25px] text-[#0C2C55]/80'>Explore properties with ease through guided tours tailored to your needs.</p>
                </div>
                <div className="bg-[#0C2C55] border"></div>
                <div className="flex flex-col text-left gap-6">
                    <img src={AccountOffer} alt='Expert Icon' width="50px"/>
                    <p className='h-offers-p1 text-[24px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] 
                    leading-[14px] sm:leading-[16px] md:leading-[20px] lg:leading-[25px] xl:leading-[25px]'>Expert Guidance</p>
                    <p className='h-offers-p2 text-[18px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] 
                    leading-[20px] sm:leading-[16px] md:leading-[20px] lg:leading-[25px] xl:leading-[25px] text-[#0C2C55]/80'>Personalized support from real estate experts to help you make the best decisions.</p>
                </div>
                <div className="bg-[#0C2C55] border"></div>
                <div className="flex flex-col text-left gap-6">
                    <img src={VerifiedOffer} alt='Verified Icon' width="50px"/>
                    <p className='h-offers-p1 text-[24px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] 
                    leading-[14px] sm:leading-[16px] md:leading-[20px] lg:leading-[25px] xl:leading-[25px]'>Verified Documents</p>
                    <p className='h-offers-p2 text-[18px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] 
                    leading-[20px] sm:leading-[16px] md:leading-[20px] lg:leading-[25px] xl:leading-[25px] text-[#0C2C55]/80'>Enjoy a smooth and worry-free process with verified paperwork you can trust.</p>
                </div>
            </div>

            {/* CONTENT - 3 - REVIEWS */}
            <div className='w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1260px]
             h-auto mt-[200px] mx-auto flex flex-col items-center px-4 gap-20'>
                <div className='flex text-center md:text-left justify-between items-center w-full max-w-[1500px] h-auto'>
                    <div className="w-full flex flex-col px-8 md:p-0 gap-2 lg:gap-2 xl:gap-4">
                        <p className='text-[28px] lg:text-[28px] xl:text-[36px] text-[#A9A9A9]/70 h-content-new-property-p1'>Feedbacks and Reviews</p>
                        <p className='text-[20px] lg:text-[26px] xl:text-[32px] h-content-new-property-p2'>See what our clients have to say about their dream homes with us!</p>
                    </div>
                </div>
                <div className="w-full justify-center items-center flex flex-col md:flex-row gap-8">
                    <div className='w-full max-w-[350px] flex flex-col items-center bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]'>
                        <img src={ReviewImg} alt='Review Image' className='hidden sm:block w-full rounded-[10px] rounded-b-none'/>
                        
                        <div className='w-full flex flex-col justify-items-stretch p-8 gap-8'>
                            <div className="w-full justify-center items-center flex flex-col lg:flex-row gap-8">
                                <img src={ReviewAccount} alt='Review Image' className='w-[75px] lg:mt-[-40px] border border-black rounded-full'/>
                                <p className='h-content-review-p2 text-center'> Juanna Dela Cruz </p>
                            </div>
                            <p className='h-content-review-p text-center'>
                                "Love my new home! Great location and smooth process. Highly recommended!"
                            </p>
                            <p className='h-content-review-post'>
                                By Juanna Dela Cruz 4 days ago
                            </p>
                        </div>
                    </div>
                    <div className='w-full max-w-[350px] flex flex-col items-center bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]'>
                        <img src={ReviewImg} alt='Review Image' className='hidden sm:block w-full rounded-[10px] rounded-b-none'/>
                        
                        <div className='w-full flex flex-col justify-items-stretch p-8 gap-8'>
                            <div className="w-full justify-center items-center flex flex-col lg:flex-row gap-8">
                                <img src={ReviewAccount} alt='Review Image' className='w-[75px] lg:mt-[-40px] border border-black rounded-full'/>
                                <p className='h-content-review-p2 text-center'> Juanna Dela Cruz </p>
                            </div>
                            <p className='h-content-review-p text-center'>
                                "Love my new home! Great location and smooth process. Highly recommended!"
                            </p>
                            <p className='h-content-review-post'>
                                By Juanna Dela Cruz 4 days ago
                            </p>
                        </div>
                    </div>
                    <div className='w-full max-w-[350px] flex flex-col items-center bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]'>
                        <img src={ReviewImg} alt='Review Image' className='hidden sm:block w-full rounded-[10px] rounded-b-none'/>
                        
                        <div className='w-full flex flex-col justify-items-stretch p-8 gap-8'>
                            <div className="w-full justify-center items-center flex flex-col lg:flex-row gap-8">
                                <img src={ReviewAccount} alt='Review Image' className='w-[75px] lg:mt-[-40px] border border-black rounded-full'/>
                                <p className='h-content-review-p2 text-center'> Juanna Dela Cruz </p>
                            </div>
                            <p className='h-content-review-p text-center'>
                                "Love my new home! Great location and smooth process. Highly recommended!"
                            </p>
                            <p className='h-content-review-post'>
                                By Juanna Dela Cruz 4 days ago
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT - 4 - COMMON QUESTIONS */}
            <div className='w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1260px]
             h-auto mt-[150px] mx-auto flex flex-col'>
                <div className="w-full justify-center items-center flex flex-col mb-8 px-8 gap-2 lg:gap-2 xl:gap-4">
                    <p className='text-[20px] lg:text-[28px] xl:text-[22px] tracking-[1px] text-[#A9A9A9]/70 h-faq-p1'>COMMON QUESTIONS</p>
                </div>
                <div
                className="flex flex-col pt-3 px-8 rounded-[10px] hover:bg-[#AFD9FF]/30 cursor-pointer transition-all duration-200 ease-in"
                >
                <div className="w-full justify-between items-center flex py-8 gap-2">
                    <p className="text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] h-faq-p2">Lorem Ipsum?
                    </p>
                    <Icon path={mdiArrowDownDropCircle} size={1.8} color="#0C2C55" />
                </div>
                <div className="bg-[#0C2C55] border"></div>
                </div>
            </div>

            {/* CONTENT - 5 - WORK WITH US */}
            <div className='w-full max-w-[350px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1260px]
             h-auto mt-[150px] mb-[100px] mx-auto px-4 flex flex-col md:flex-col justify-center items-center'>
                <div className='flex mb-[50px] text-center md:text-left justify-between items-center w-full h-auto'>
                    <div className="w-full flex flex-col md:p-0 gap-2 lg:gap-2 xl:gap-4">
                        <p className='text-[28px] lg:text-[28px] xl:text-[36px] text-[#A9A9A9]/70 h-content-new-property-p1'>Work With Us</p>
                        <p className='text-[20px] lg:text-[26px] xl:text-[32px] h-content-new-property-p2'>Rent out your apartment hassle-free</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="w-full max-w-[400px] sm:max-w-[500px] flex flex-col bg-white shadow-md rounded-[20px] text-center text-[#0C2C55]">
                        <img src={WWU1} alt="Review Image" className="rounded-[10px] rounded-b-none" />
                        <div className="px-12 py-12 flex flex-col gap-6">
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[26px] h-wwu-p1'>Become a North Realty Landlord</p>
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[16px] h-wwu-p2'>Reach serious renters and maximize your investment — listing made simple, returns made real.</p>
                            <div className  ="mt-[10px] flex justify-center items-center gap-4 cursor-pointer">
                                <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[20px] h-wwu-p1'>Learn More</p>
                                <Icon path={mdiArrowRight} size={1.5} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[400px] sm:max-w-[500px] flex flex-col bg-white shadow-md rounded-[20px] text-center text-[#0C2C55]">
                        <img src={WWU2} alt="Review Image" className="rounded-[10px] rounded-b-none" />
                        <div className="px-12 py-12 flex flex-col gap-6">
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[26px] h-wwu-p1'>Become a North Realty Landlord</p>
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[16px] h-wwu-p2'>Reach serious renters and maximize your investment — listing made simple, returns made real.</p>
                            <div className  ="mt-[10px] flex justify-center items-center gap-4 cursor-pointer">
                                <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[20px] h-wwu-p1'>Learn More</p>
                                <Icon path={mdiArrowRight} size={1.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        {/* FOOTER */}
        <div className='w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1260px] px-4 flex flex-col h-auto items-center pt-[50px] lg:pt-[100px] pb-[40px] lg:pb-[60px]'>
            <div className="flex flex-col w-full items-center">
                <img src={LSLogoBlue} className="mb-[20px] w-[200px] lg:w-[200px] block lg:hidden" />
                <p className='h-footer-p1 w-full text-center md:text-left
                text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[30px] leading-[18px] lg:leading-[26px] xl:leading-[40px]'>North Realty – A family-owned agency of brokers and agents, curating trusted property listings for every homebuyer.</p>
                <div className="w-full flex flex-row justify-end         mt-[50px] lg:mt-[80px]">
                    <div className='flex flex-col-2 items-end gap-8 text-[14px] sm:text-[16px] lg:text-[20px] text-[#0C2C55]/90'>
                        <p className="flex h-footer-p2 cursor-pointer">About Us</p>
                        <p className="h-footer-p2 cursor-pointer">Terms and Conditions</p>
                        <p className="h-footer-p2 cursor-pointer">For Landlords</p>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-end mt-[10px] lg:mt-[20px]">
                    <div className='flex flex-col-2 items-center gap-2 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] text-[#0C2C55]/90'>
                        <img src={Copyright} className="w-[15px]" />
                        <p className="h-footer-p3">Copyright North Realty</p>
                    </div>
                </div>
            </div>
            
        </div>
    
    </div>
    
    {isMenuOpen && (
        <div className="fixed z-3 inset-0 bg-black bg-opacity-50 duration-300 flex justify-center items-center">
            <HamburgerMenu closeMenu={() => setIsMenuOpen(false)} />
        </div>
    )}
    
    </>
  )
}

export default Home;
