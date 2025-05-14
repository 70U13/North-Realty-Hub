import { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
 
import LSLogoWhite from '../../images/landscape-bg-blue-2.png';
import LSLogoBlue from '../../images/logo/landscape-bg-white-2.png';
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
import CategoryIcon1 from '../../images/icons/11.png';
import CategoryIcon2 from '../../images/icons/12.png';
import CategoryIcon3 from '../../images/icons/21.png';
import CategoryBtn from '../../images/icons/Search Btn.svg';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { mdiArrowRight } from '@mdi/js';

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
            <div className="relative z-2 py-[20px] px-[50px] gap-10 flex justify-between items-center">
                <img src={LSLogoBlue} alt="Logo" className="w-[150px] lg:w-[250px]"  />
                <div className="hidden lg:flex flex flex-row justify-center items-center gap-6">
                    <div className="bg-white w-[75px] h-[32px] rounded-[20px] flex items-center justify-center self-center">
                        <p className="h-tabs-p1 text-center cursor-pointer hover:underline">Home</p>
                    </div>
                    <p className="h-tabs-p1 text-center cursor-pointer hover:underline">Properties</p>
                    <p className="h-tabs-p1 text-center cursor-pointer hover:underline">Services</p>
                    <p className="h-tabs-p1 text-center cursor-pointer hover:underline">Meet the Team</p>
                    <div onClick={navigateContact} className="bg-[#0C2C55] w-[115px] h-[32px] rounded-[20px] flex items-center justify-center self-center">
                        <p className="h-tabs-p2 text-center cursor-pointer hover:underline">Contact Us</p>
                    </div>
                    <div onClick={navigateAdmin} className="p-1 items-center justify-center rounded-full bg-white cursor-pointer">
                        <img src={Account} alt="Logo" className="w-[23px]"  />
                    </div>
                </div>
                
                <img onClick={() => setIsMenuOpen(true)} src={Menu} className="block lg:hidden lg:px-[] xl:mx-[50px]" width="35px" height="31px" /> {/*sm:opacity-0*/}
            </div>
        </div>

        {/* MAIN HEADER */}
        <div className=" w-full max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] mx-6 flex flex-col mt-[80px] mb-[150px] gap-16">
            
            <div className='flex flex-col w-auto h-auto text-center justify-center items-center'>
                <p className='h-top-p1 leading-[20px] md:leading-[40px] lg:leading-[50px] xl:leading-[70px] tracking-[3px]
                text-[20px] md:text-[40px] lg:text-[50px] xl:text-[60px]'> Guiding Families Home, <br /> One Dream At A Time 🏡</p>

                <p className='h-top-p2 leading-[20px] md:leading-[40px] lg:leading-[55px] xl:leading-[70px] tracking-[1px]
                text-[18px] md:text-[30px] lg:text-[30px] xl:text-[35px] text-[#0C2C55]/70'>rent, buy, or sell?</p>
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
            <div className='w-full max-w-[1260px] mx-auto overflow:hidden flex flex-col h-auto justify-center items-center mt-[50px]'>
                <div className='flex px-[10px] justify-between items-center w-full max-w-[1500px] h-auto'>
                    <div className="flex flex-col gap-2">
                        <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] h-content-new-property-p1'>Property curated Collections</p>
                        <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] h-content-new-property-p2'>Find the home that fits your needs</p>
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
            <div className='w-full mt-[100px] max-w-[1400px] mx-auto h-content-review flex flex-col w-full px-4 gap-4 mt-[40px] mx-auto'>
                <p className="text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] 
                h-headers-p1 text-center ">Finding your next home is easy with furnished options, <br/>trusted listings, and stress-free support.</p>
            </div>

            {/* CONTENT - 3 - OFFERS */}
            <div className='mt-[100px] flex flex-col justify-center h-auto w-full mt-[30px] mx-auto'>
                <div className='flex grid-cols-2 justify-center h-auto w-full mx-auto gap-6'>
                    <div className='flex flex-col w-auto h-[150px] flex flex-col bg-white rounded-[10px] p-6 gap-2'>
                        <img src={HomeOffer} alt='Home Icon' width="20px"/>
                        <p className='h-offers-p1 text-left'>Home Tour</p>
                        <p className='h-offers-p2 text-left'>Explore properties with ease through guided tours tailored to your needs.</p>
                    </div>
                    <div className='flex flex-col w-auto h-[150px] flex flex-col bg-white rounded-[10px] p-6 gap-2'>
                        <img src={AccountOffer} alt='Expert Icon' width="20px"/>
                        <p className='h-offers-p1 text-left'>Expert Guidance</p>
                        <p className='h-offers-p2 text-left'>Personalized support from real estate experts to help you make the best decisions.</p>
                    </div>
                </div>
                <div className='flex grid-cols-2 justify-center h-auto w-full mt-[20px] mx-auto gap-6'>
                    <div className='flex flex-col w-auto h-[150px] flex flex-col bg-white rounded-[10px] p-6 gap-2'>
                        <img src={VerifiedOffer} alt='Verified Icon' width="20px"/>
                        <p className='h-offers-p1 text-left'>Verified Documents</p>
                        <p className='h-offers-p2 text-left'>Enjoy a smooth and worry-free process with verified paperwork you can trust.</p>
                    </div>
                    <div className='flex flex-col w-auto h-[150px] flex flex-col bg-white rounded-[10px] p-6 gap-2'>
                        <img src={DealsOffer} alt='Deals Icon' width="25px" className='mt-[-3px]'/>
                        <p className='mt-[-3px] h-offers-p1 text-left'>Best Deals</p>
                        <p className='h-offers-p2 text-left'>Get access to the most competitive prices and exclusive offers.</p>
                    </div>
                </div>
            </div>

            {/* CONTENT - HEADER 2 */}
            <div className='h-content-review flex justify-center w-full px-4 mt-[40px] mx-auto'>
                <img src={Header2} alt='Header 2' width='450px'/>
            </div>

            {/* CONTENT - 4 - REVIEWS */}
            <div className='bg-white w-auto h-auto flex flex-col items-center mt-[120px] p-4'>
                <div className='w-full flex flex-col items-center bg-white rounded-[20px] mt-[-50px] p-4 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]'>
                    
                    <img src={ReviewImg} alt='Review Image' width="260px" className='shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] mt-[-60px]' />
                    
                    <div className='grid justify-items-stretch p-3'>
                        <img src={QStart} alt='Quotation Start' width="14px"  />
                        <div className='p-4'>
                            <p className='h-content-review-p'>
                                Love my new home! Great location and smooth process. <br/> Highly recommended! <br/><br/> #DreamHome #CebuLiving
                            </p>
                            <p className='h-content-review-post'>
                                By   Juanna Dela Cruz   4 days ago
                            </p>
                        </div>
                        <img src={QEnd} alt='Quotation End' width="14px" className='justify-self-end' />
                    </div>

                    <div className='bg-[#DD88CF] opacity-[90px] w-auto h-[23px] rounded-[5px] flex items-center justify-center p-2'>
                        <p className='h-content-btn text-center '>Read Post</p>
                    </div>
                </div>
                <div className='mt-[20px] bg-[#FFDC7F] w-auto h-[23px] rounded-[5px] flex items-center justify-center p-2 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.25)]'>
                    <p className='h-top-btn text-center '>See More Reviews</p>
                </div>
            </div>

            <div className='h-[50px]'>

            </div>
        </div>
        
        {/* FOOTER */}
        <div className='flex flex-col h-auto items-center mx-[10px] py-[20px] gap-6'>

            <button className="fixed bottom-5 right-5 bg-white text-white p-3 rounded-full shadow-lg">
                <svg className="w-4 h-4" viewBox="0 0 384 512">
                    <path
                        fill="#0C2C55"
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>

            <img src={LSLogoBlue} width="150px" height="75px" />
            <p className='h-footer-p1 w-[275px]'>North Realty – A family-owned agency of brokers and agents, curating trusted property listings for every homebuyer. 🏡💙</p>
            <div className='flex flex-col-2 items-center gap-3'>
                <div className='flex h-footer-p2 items-center gap-2'>
                    <img src={IconEmail} width="13px" height="75px" />
                    <p>juandelacruz@gmail.com</p>
                </div>
                <div className='flex h-footer-p2 items-center gap-1'>
                    <img src={IconEmail} width="13px" height="75px" />
                    <p>+63 912 345 6789</p>
                </div>
            </div>
            <p className='h-footer-copyright'>Copyright North Realty</p>
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
