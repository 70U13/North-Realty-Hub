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

const Home = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigateContact = () => {
        navigate('/contact-us');
    };

    const navigateAdmin = () => {
        navigate('/admin');
    };

    const [selectedIndex, setSelectedIndex] = useState(0);

    const tabs = ["RENT", "BUY", "SELL"];

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

  return (
    <>
    
    <div className='flex flex-col justify-center items-center w-full bg-[#AFD9FF] h-auto'>

        <div className="absolute inset-0 bg-no-repeat xl:mt-[-160px] w-[100%] h-[40%] bg-cover bg-right-top bg-contain opacity-90 z-1"
            style={{ backgroundImage: `url(${HomeBG})`, opacity: '0.9' }}/> 

        {/* For sticky navigation, add sticky and bg-[#AFD9FF] */}
        <div className="top-0 z-50 ">
            
            {/* NAVBAR HEADER */}
            <div className="relative z-2 lg:w-[1000px] xl:w-[1200px] py-[20px] gap-10 flex justify-between items-center">
                <img src={LSLogoBlue} alt="Logo" className="w-[150px] lg:w-[330px]"  />
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

        <div className="relative z-3 lg:w-[1000px] xl:w-[1200px]">
            <div className='w-auto h-auto ml-[30px]'>
                <p className='h-top-p1 leading-[25px] lg:leading-[55px] xl:leading-[80px]
                text-[22px] lg:text-[50px] xl:text-[70px]' 
                style={{
                    textShadow: '5px 3px 3px rgba(0, 0, 0, 0.2)',
                }}> Guiding <br/> Families Home, <br/> One Dream  <br/> At A Time 🏡</p>

                <p className='w-[550px] mt-[25px] h-top-p2 leading-[25px] xl:leading-[20px]
                text-[22px] lg:text-[14px] xl:text-[18px]' >
                We connect you with our family of trusted experts, ensuring <br/> seamless service and legal documentation every step of the way.
                </p>
            </div>
        </div>

        {/* CONTENT */}
        <div className='mt-[150px] flex flex-col h-auto justify-center items-center relative w-full h-auto z-2 rounded-[30px] bg-[#EFF8FF] p-4 text-white'>

            {/* CONTENT - 0 - CATEGORIES */}
            <div className="mt-[-110px] lg:w-[1000px] xl:w-[1000px] flex flex-col">

                <div className="relative w-[450px]">
                    {/* Sliding background */}
                    <div
                        className="absolute top-0 h-[50px] w-[150px] rounded-t-[20px] bg-white transition-transform duration-300"
                        style={{ transform: `translateX(${selectedIndex * 150}px)` }}
                    />

                    {/* Tab buttons */}
                    <div className="flex flex-row relative z-10">
                        {tabs.map((tab, index) => (
                        <div
                            key={tab}
                            onClick={() => setSelectedIndex(index)}
                            className="w-[150px] h-[50px] py-5 cursor-pointer text-center rounded-t-[20px]">
                            <p className={`h-category-top-p2 tracking-[10px] transition-colors duration-200 ${
                                selectedIndex === index ? "" : "" }`}>
                            {tab}
                            </p>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row w-full bg-white rounded-tl-none rounded-[20px]">

                    {/* Catgeory 1 */}
                    <div className="flex flex-col py-[20px] px-[60px] gap-2">
                        <p className="h-category-p1 ml-[-10px]">Location</p>
                        <div className="flex flex-col-2 items-center">
                            <div className="relative w-[200px]" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className={`h-category-p2 flex justify-between flex-row w-full px-4 py-2 text-left border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white ${
                                        selected ? "text-black" : "text-gray-400" }`}>
                                    {selected || "Select your city"}
                                    <img src={CategoryIcon1} alt="Logo" className="w-[20px]"  />
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

                    {/* Catgeory 2 */}
                    <div className="flex flex-col py-[20px] px-[30px] gap-2">
                        <p className="h-category-p1 ml-[-10px]">Property Type</p>
                        <div className="flex flex-col-2 items-center">
                            <div className="relative w-[250px]" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className={`h-category-p2 flex justify-between flex-row w-full px-4 py-2 text-left border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white ${
                                        selected ? "text-black" : "text-gray-400" }`}>
                                    {selected || "Choose property type"}
                                    <img src={CategoryIcon2} alt="Logo" className="w-[20px]"  />
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

                    {/* Catgeory 3 */}
                    <div className="flex flex-col py-[20px] px-[30px] gap-2">
                        <p className="h-category-p1 ml-[-10px]">Agents</p>
                        <div className="flex flex-col-2 items-center">
                            <div className="relative w-[200px]" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className={`h-category-p2 flex justify-between flex-row w-full px-4 py-2 text-left border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white ${
                                        selected ? "text-black" : "text-gray-400" }`}>
                                    {selected || "Find your agent"}
                                    <img src={CategoryIcon3} alt="Logo" className="w-[20px]"  />
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

                    <img src={CategoryBtn} alt="Logo" className="ml-[10px] w-[50px]" />
                </div>
            </div>

            {/* CONTENT - 2 - NEW PROPERTIES CAROUSEL */}
            <div className='lg:w-[1000px] xl:w-[1200px] flex flex-col h-auto justify-center mt-[50px]'>
                <div className='flex justify-between w-full h-[25px] px-4'>
                    <p className='text-[24px] xl:text-[28px] ml-[30px] h-content-new-property-p1 text-center'>New Listings</p>
                    <div className='flex justify-center gap-2 cursor-pointer'>
                        <p className='text-[14px] xl:text-[18px] h-content-new-property-p2 text-center'>See All</p>
                        <img src={RightArrow} alt='Bed Icon' width="13px" />
                    </div>
                </div>

                <div className="flex justify-center items-center relative w-full h-auto mt-[15px] px-2">
                    {/* Scrollable Container */}
                    <div className="py-8 flex overflow-x-auto w-auto h-auto scrollbar-hide snap-x snap-mandatory space-x-4">
                        {/* Card Wrapper */}
                        <div className="flex flex-nowrap space-x-6">
                            {/* Card 1 */}
                            <div className="w-[220px] xl:w-[350px] h-[275px] xl:h-[300px] 
                                flex flex-col items-center bg-white rounded-[20px] p-4 shadow-md snap-center">
                                <img src={ReviewImg} alt="Review Image" className="w-[180px] xl:w-[250px] rounded-[10px]" />
                                <div className="flex flex-col w-[180px] gap-1">
                                    <div className="flex justify-between mt-[5px] px-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-right">Posted 4 days ago</p>
                                    </div>
                                    <div className="flex justify-between px-1">
                                        <img src={LocatorIcon} alt="Location Icon" width="25px" className="ml-[-8px]" />
                                        <p className="ml-[-30px] h-content-property-card-p3 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-right">(45 sqm.)</p>
                                    </div>
                                    <div className="flex justify-between px-1 mt-2">
                                        <img src={BedIcon} alt="Bed Icon" width="20px" className="ml-[-2px]"/>
                                        <p className="ml-[-15px] h-content-property-card-p2 text-left">2 beds</p>
                                        <img src={KitchenIcon} alt="Kitchen Icon" width="25px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-left">1 kitchen</p>
                                        <img src={BathroomIcon} alt="Bathroom Icon" width="25px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-right">Yes</p>
                                    </div>
                                    <div className="mt-[10px] bg-[#0C2C55] w-[73px] h-[23px] rounded-[5px] flex items-center justify-center self-center">
                                        <p className="h-new-property-btn text-center">Read More</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="w-[220px] xl:w-[350px] h-[275px] xl:h-[300px] 
                                flex flex-col items-center bg-white rounded-[20px] p-4 shadow-md snap-center">
                                <img src={ReviewImg} alt="Review Image" className="w-[180px] xl:w-[250px] rounded-[10px]" />
                                <div className="flex flex-col w-[180px] gap-1">
                                    <div className="flex justify-between mt-[5px] px-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-right">Posted 4 days ago</p>
                                    </div>
                                    <div className="flex justify-between px-1">
                                        <img src={LocatorIcon} alt="Location Icon" width="25px" className="ml-[-8px]" />
                                        <p className="ml-[-30px] h-content-property-card-p3 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-right">(45 sqm.)</p>
                                    </div>
                                    <div className="flex justify-between px-1 mt-2">
                                        <img src={BedIcon} alt="Bed Icon" width="20px" className="ml-[-2px]"/>
                                        <p className="ml-[-15px] h-content-property-card-p2 text-left">2 beds</p>
                                        <img src={KitchenIcon} alt="Kitchen Icon" width="25px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-left">1 kitchen</p>
                                        <img src={BathroomIcon} alt="Bathroom Icon" width="25px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-right">Yes</p>
                                    </div>
                                    <div className="mt-[10px] bg-[#0C2C55] w-[73px] h-[23px] rounded-[5px] flex items-center justify-center self-center">
                                        <p className="h-new-property-btn text-center">Read More</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="w-[220px] xl:w-[350px] h-[275px] xl:h-[300px] 
                                flex flex-col items-center bg-white rounded-[20px] p-4 shadow-md snap-center">
                                <img src={ReviewImg} alt="Review Image" className="w-[180px] xl:w-[250px] rounded-[10px]" />
                                <div className="flex flex-col w-[180px] gap-1">
                                    <div className="flex justify-between mt-[5px] px-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-right">Posted 4 days ago</p>
                                    </div>
                                    <div className="flex justify-between px-1">
                                        <img src={LocatorIcon} alt="Location Icon" width="25px" className="ml-[-8px]" />
                                        <p className="ml-[-30px] h-content-property-card-p3 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-right">(45 sqm.)</p>
                                    </div>
                                    <div className="flex justify-between px-1 mt-2">
                                        <img src={BedIcon} alt="Bed Icon" width="20px" className="ml-[-2px]"/>
                                        <p className="ml-[-15px] h-content-property-card-p2 text-left">2 beds</p>
                                        <img src={KitchenIcon} alt="Kitchen Icon" width="25px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-left">1 kitchen</p>
                                        <img src={BathroomIcon} alt="Bathroom Icon" width="25px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-right">Yes</p>
                                    </div>
                                    <div className="mt-[10px] bg-[#0C2C55] w-[73px] h-[23px] rounded-[5px] flex items-center justify-center self-center">
                                        <p className="h-new-property-btn text-center">Read More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* CONTENT - HEADER 1 */}
            <div className='h-content-review flex justify-center w-full px-4 mt-[40px] mx-auto'>
                <img src={Header1} alt='Header 1' width='450px'/>
            </div>

            {/* CONTENT - 3 - OFFERS */}
            <div className='flex flex-col justify-center h-auto w-full mt-[30px] mx-auto'>
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
