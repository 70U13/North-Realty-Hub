import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import HamburgerMenu from './Menu.jsx';
import LSLogoBlue from '../../images/logo/landscape-bg-white-2.png';
import HomeBG from '../../images/bg/13.svg';
import Menu from '../../images/hamburgermenu.svg';
import ReviewImg from '../../images/1.jpg';
import LocatorIcon from '../../images/icons/11.png';
import BedIcon from '../../images/icons/5.png';
import KitchenIcon from '../../images/icons/7.png';
import BathroomIcon from '../../images/icons/9.png';
import PlaceIcon from '../../images/icons/11.png';
import DropdownIcon from '../../images/icons/dropdown.svg';
import SearchBtn from '../../images/icons/Search Btn.svg';
import Header2 from '../../images/header 2.svg';
import QStart from '../../images/quote-start.svg';
import QEnd from '../../images/quote-end.svg';
import IconEmail from '../../images/icons/22.png';

const Properties = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigateContact = () => {
        navigate('/contact-us'); // Change '/contact' to your desired route
    };

    return (
        <>
        <div className='flex flex-col w-full h-auto bg-[#B9DDFF]'>

            <div className="absolute inset-0 bg-no-repeat bg-right-top bg-contain opacity-90 z-1"
                style={{ backgroundImage: `url(${HomeBG})`, backgroundSize: '600px ', opacity: '0.9' }}/>
    
            {/* NAVBAR HEADER */}
            <div className='relative z-2 mx-[10px] pt-[20px] pb-[10px]'>
                
                <div className="mx-[20px] flex justify-between items-center">
                    <img src={LSLogoBlue} width="150px" height="75px" />
                    <img onClick={() => setIsMenuOpen(true)} src={Menu} width="35px" height="31px" />
                </div>
                        
                <div className='mx-[30px] flex justify-center'>
                    <div className='grid grid-cols-2 justify-center items-center pl-2 pt-2 pb-4'>
                        <div className='w-auto'>
                            <p className='h-top-p'>Guiding <br/> Families Home, One Dream <br/> At A Time 🏡</p>
                            <div onClick={navigateContact} className='cursor-pointer mt-[15px] bg-[#FFFFFF] w-[78px] h-[27px] rounded-[5px] flex items-center justify-center'>
                                <p className='h-top-btn text-center'>Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className='relative h-auto z-2 mt-[40px] bg-[#EFF8FF] p-4 text-white'>

                {/* CONTENT - 1 - FILTERS */}
                <div className="flex justify-center items-center">
                    <div className='border mt-[-50px] m-4 py-3 px-6 w-[445px] h-auto flex flex-col-3 gap-14 rounded-[10px] bg-white'>
                        <div className="flex flex-col ml-2">
                            <p className="h-content-filter-p1 ">Location</p>
                            <div className="flex gap-4 w-auto">
                                <p className="h-content-filter-p2 mt-[-3px]">Select your city</p>
                                <img src={PlaceIcon} alt="Review Image" width="20px" className="" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="h-content-filter-p1 ">Property Type</p>
                            <div className="flex gap-4 w-auto">
                                <p className="h-content-filter-p2 mt-[-3px]">Choose property type</p>
                                <img src={DropdownIcon} alt="Review Image" width="12px" className="mt-[-2px]" />
                            </div>
                        </div>
                        <img src={SearchBtn} alt="Review Image" width="40px" className="" />
                    </div>
                </div>

                {/* CONTENT - 2 - PROPERTIES */}
                <div className='grid grid-cols-2 mx-2 gap-4 justify-items-center mt-[10px] md:flex md:flex-col md:items-center'>
                    
                    {/* Card 1 */}
                    <div className="w-[220px] h-auto py-4 flex flex-col items-center rounded-[20px] snap-center">
                        <img src={ReviewImg} alt="Review Image" width="200px" className="rounded-[10px]" />
                        <div className="flex flex-col w-[180px] gap-1">
                            <div className="flex justify-between mt-[5px]">
                                <p className="h-content-property-card-p1 text-left">Apartment</p>
                                <p className="h-content-property-card-p2 text-right">Posted 4 days ago</p>
                            </div>
                            <div className="flex justify-between">
                                <img src={LocatorIcon} alt="Location Icon" width="25px" className="ml-[-8px]" />
                                <p className="ml-[-45px] h-content-property-card-p3 text-left">Lahug, Cebu City</p>
                                <p className="h-content-property-card-p2 text-right">(45 sqm.)</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <img src={BedIcon} alt="Bed Icon" width="20px" className="ml-[-2px]"/>
                                <p className="ml-[-15px] h-content-property-card-p2 text-left">2 beds</p>
                                <img src={KitchenIcon} alt="Kitchen Icon" width="25px" />
                                <p className="ml-[-20px] h-content-property-card-p2 text-left">1 kitchen</p>
                                <img src={BathroomIcon} alt="Bathroom Icon" width="25px" />
                                <p className="ml-[-20px] h-content-property-card-p2 text-right">Yes</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 1 */}
                    <div className="w-[220px] h-auto py-4 flex flex-col items-center rounded-[20px] snap-center">
                        <img src={ReviewImg} alt="Review Image" width="200px" className="rounded-[10px]" />
                        <div className="flex flex-col w-[180px] gap-1">
                            <div className="flex justify-between mt-[5px]">
                                <p className="h-content-property-card-p1 text-left">Apartment</p>
                                <p className="h-content-property-card-p2 text-right">Posted 4 days ago</p>
                            </div>
                            <div className="flex justify-between">
                                <img src={LocatorIcon} alt="Location Icon" width="25px" className="ml-[-8px]" />
                                <p className="ml-[-45px] h-content-property-card-p3 text-left">Lahug, Cebu City</p>
                                <p className="h-content-property-card-p2 text-right">(45 sqm.)</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <img src={BedIcon} alt="Bed Icon" width="20px" className="ml-[-2px]"/>
                                <p className="ml-[-15px] h-content-property-card-p2 text-left">2 beds</p>
                                <img src={KitchenIcon} alt="Kitchen Icon" width="25px" />
                                <p className="ml-[-20px] h-content-property-card-p2 text-left">1 kitchen</p>
                                <img src={BathroomIcon} alt="Bathroom Icon" width="25px" />
                                <p className="ml-[-20px] h-content-property-card-p2 text-right">Yes</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 1 */}
                    <div className="w-[220px] h-auto py-4 flex flex-col items-center rounded-[20px] snap-center">
                        <img src={ReviewImg} alt="Review Image" width="200px" className="rounded-[10px]" />
                        <div className="flex flex-col w-[180px] gap-1">
                            <div className="flex justify-between mt-[5px]">
                                <p className="h-content-property-card-p1 text-left">Apartment</p>
                                <p className="h-content-property-card-p2 text-right">Posted 4 days ago</p>
                            </div>
                            <div className="flex justify-between">
                                <img src={LocatorIcon} alt="Location Icon" width="25px" className="ml-[-8px]" />
                                <p className="ml-[-45px] h-content-property-card-p3 text-left">Lahug, Cebu City</p>
                                <p className="h-content-property-card-p2 text-right">(45 sqm.)</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <img src={BedIcon} alt="Bed Icon" width="20px" className="ml-[-2px]"/>
                                <p className="ml-[-15px] h-content-property-card-p2 text-left">2 beds</p>
                                <img src={KitchenIcon} alt="Kitchen Icon" width="25px" />
                                <p className="ml-[-20px] h-content-property-card-p2 text-left">1 kitchen</p>
                                <img src={BathroomIcon} alt="Bathroom Icon" width="25px" />
                                <p className="ml-[-20px] h-content-property-card-p2 text-right">Yes</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 1 */}
                    <div className="w-[220px] h-auto py-4 flex flex-col items-center rounded-[20px] snap-center">
                        <img src={ReviewImg} alt="Review Image" width="200px" className="rounded-[10px]" />
                        <div className="flex flex-col w-[180px] gap-1">
                            <div className="flex justify-between mt-[5px]">
                                <p className="h-content-property-card-p1 text-left">Apartment</p>
                                <p className="h-content-property-card-p2 text-right">Posted 4 days ago</p>
                            </div>
                            <div className="flex justify-between">
                                <img src={LocatorIcon} alt="Location Icon" width="25px" className="ml-[-8px]" />
                                <p className="ml-[-45px] h-content-property-card-p3 text-left">Lahug, Cebu City</p>
                                <p className="h-content-property-card-p2 text-right">(45 sqm.)</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <img src={BedIcon} alt="Bed Icon" width="20px" className="ml-[-2px]"/>
                                <p className="ml-[-15px] h-content-property-card-p2 text-left">2 beds</p>
                                <img src={KitchenIcon} alt="Kitchen Icon" width="25px" />
                                <p className="ml-[-20px] h-content-property-card-p2 text-left">1 kitchen</p>
                                <img src={BathroomIcon} alt="Bathroom Icon" width="25px" />
                                <p className="ml-[-20px] h-content-property-card-p2 text-right">Yes</p>
                            </div>
                        </div>
                    </div>
    
                </div>

                {/* CONTENT - HEADER 2 */}
                <div className='h-content-review flex justify-center w-full px-4 mt-[30px] mx-auto'>
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
            <div className="fixed inset-0 bg-black bg-opacity-50 duration-300 flex justify-center items-center z-10">
                <HamburgerMenu closeMenu={() => setIsMenuOpen(false)} />
            </div>
        )}
        </>
    )
}

export default Properties