import { useState } from "react";
import LandscapeLogo from '../../images/landscape-bg-blue-2.png';
import Menu from '../../images/Nav Bar.svg';
import HeadImg from '../../images/2.jpg';
import PreviewImg from '../../images/3.jpg';
import ReviewImg from '../../images/1.jpg';
import QStart from '../../images/quote-start.svg';
import QEnd from '../../images/quote-end.svg';
import PreviewText from '../../images/previewText.svg';
import IconEmail from '../../images/icon-email.svg';
import IconPhone from '../../images/icon-phone.svg';
import RightArrow from '../../images/right_arrow_icon 1.svg';
import LocatorIcon from '../../images/place_icon 1.svg';
import BedIcon from '../../images/bed_icon 1.svg';
import KitchenIcon from '../../images/kitchen_icon 1.svg';
import BathroomIcon from '../../images/toilet_icon 1.svg';
import Header1 from '../../images/header 1.svg';
import HomeOffer from '../../images/home_icon 1.svg';
import AccountOffer from '../../images/accounts_icon 1.svg';
import VerifiedOffer from '../../images/ok_icon 1.svg';
import DealsOffer from '../../images/deals_icon 1.svg';
import Header2 from '../../images/header 2.svg';
import HamburgerMenu from './Menu.jsx';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex flex-col w-full h-auto bg-[#0C2C55]'>

        {/* NAVBAR HEADER */}
        <div className='mx-[10px] pt-[20px] pb-[10px]'>
            <div className="mx-[10px] flex justify-between items-center">
                <img src={LandscapeLogo} width="150px" height="75px" />
                <img onClick={() => setIsMenuOpen(true)} src={Menu} width="35px" height="31px" />

                {/* Overlay Menu when isMenuOpen is true */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 duration-300 flex justify-center items-center z-50">
                        <HamburgerMenu closeMenu={() => setIsMenuOpen(false)} />
                    </div>
                )}
            </div>
            
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 justify-center items-center p-5'>
                    <div className='w-[180px] mx-auto'>
                        <p className='h-top-p'>Guiding <br/> Families Home, One Dream <br/> At A Time 🏡</p>
                        <div className='mt-[10px] bg-[#FFDC7F] w-[73px] h-[23px] rounded-[5px] flex items-center justify-center'>
                            <p className='h-top-btn text-center'>Contact Us</p>
                        </div>
                    </div>
                    <img src={HeadImg} alt='Header Image' width="207px" />
                </div>
            </div>
            
        </div>

        {/* CONTENT */}
        <div className='h-auto rounded-[30px] bg-[#EAEAEA] p-4 text-white'>

            {/* CONTENT  - 1 - ALL PROPERTIES */}
            <div className='flex justify-center bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]'>
                <div className='flex flex-col-2 items-center p-3 gap-3'>
                    <img src={PreviewImg} alt='Header Image' width="250px" className='rounded-[10px]' />
                    <div className='pt-[8px]'>
                        <img src={PreviewText} alt='Header Image' width="190px" className='' />
                        <div className='mt-[10px] bg-[#FFDC7F] w-[73px] h-[23px] rounded-[5px] flex items-center justify-center'>
                            <p className='h-top-btn text-center'>Properties</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT - 2 - NEW PROPERTIES CAROUSEL */}
            <div className='flex flex-col h-auto justify-center mt-[30px]'>
                <div className='flex justify-between w-full h-[25px] px-4'>
                    <p className='h-content-new-property-p1 text-center'>New Listings</p>
                    <div className='flex justify-center gap-2'>
                        <p className='h-content-new-property-p2 text-center'>See All</p>
                        <img src={RightArrow} alt='Bed Icon' width="13px" />
                    </div>
                </div>

                <div className="flex justify-center items-center relative w-full h-auto mt-[15px] px-2">
                    {/* Scrollable Container */}
                    <div className="flex overflow-x-auto h-[273px] scrollbar-hide snap-x snap-mandatory space-x-4">
                        {/* Card Wrapper */}
                        <div className="flex flex-nowrap space-x-4">
                            {/* Card 1 */}
                            <div className="w-[220px] h-[265px] flex flex-col items-center bg-white rounded-[20px] p-4 shadow-md snap-center">
                                <img src={ReviewImg} alt="Review Image" width="180px" className="rounded-[10px]" />
                                <div className="flex flex-col w-[180px]">
                                    <div className="flex justify-between mt-[5px] px-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-right">Posted 4 days ago</p>
                                    </div>
                                    <div className="flex justify-between px-1">
                                        <img src={LocatorIcon} alt="Location Icon" width="15px" className="ml-[-5px]" />
                                        <p className="ml-[-30px] h-content-property-card-p3 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-right">(45 sqm.)</p>
                                    </div>
                                    <div className="flex justify-between px-1">
                                        <img src={BedIcon} alt="Bed Icon" width="13px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-left">2 beds</p>
                                        <img src={KitchenIcon} alt="Kitchen Icon" width="13px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-left">1 kitchen</p>
                                        <img src={BathroomIcon} alt="Bathroom Icon" width="13px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-right">Yes</p>
                                    </div>
                                    <div className="mt-[10px] bg-[#0C2C55] w-[73px] h-[23px] rounded-[5px] flex items-center justify-center self-center">
                                        <p className="h-new-property-btn text-center">Read More</p>
                                    </div>
                                </div>
                            </div>

                            {/* Duplicate Card 2 */}
                            <div className="w-[220px] h-[265px] flex flex-col items-center bg-white rounded-[20px] p-4 shadow-md snap-center">
                                <img src={ReviewImg} alt="Review Image" width="180px" className="rounded-[10px]" />
                                <div className="flex flex-col w-[180px]">
                                    <div className="flex justify-between mt-[5px] px-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-right">Posted 4 days ago</p>
                                    </div>
                                    <div className="flex justify-between px-1">
                                        <img src={LocatorIcon} alt="Location Icon" width="15px" className="ml-[-5px]" />
                                        <p className="ml-[-30px] h-content-property-card-p3 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-right">(45 sqm.)</p>
                                    </div>
                                    <div className="flex justify-between px-1">
                                        <img src={BedIcon} alt="Bed Icon" width="13px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-left">2 beds</p>
                                        <img src={KitchenIcon} alt="Kitchen Icon" width="13px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-left">1 kitchen</p>
                                        <img src={BathroomIcon} alt="Bathroom Icon" width="13px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-right">Yes</p>
                                    </div>
                                    <div className="mt-[10px] bg-[#0C2C55] w-[73px] h-[23px] rounded-[5px] flex items-center justify-center self-center">
                                        <p className="h-new-property-btn text-center">Read More</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[220px] h-[265px] flex flex-col items-center bg-white rounded-[20px] p-4 shadow-md snap-center">
                                <img src={ReviewImg} alt="Review Image" width="180px" className="rounded-[10px]" />
                                <div className="flex flex-col w-[180px]">
                                    <div className="flex justify-between mt-[5px] px-1">
                                        <p className="h-content-property-card-p1 text-left">Apartment</p>
                                        <p className="h-content-property-card-p2 text-right">Posted 4 days ago</p>
                                    </div>
                                    <div className="flex justify-between px-1">
                                        <img src={LocatorIcon} alt="Location Icon" width="15px" className="ml-[-5px]" />
                                        <p className="ml-[-30px] h-content-property-card-p3 text-left">Lahug, Cebu City</p>
                                        <p className="h-content-property-card-p2 text-right">(45 sqm.)</p>
                                    </div>
                                    <div className="flex justify-between px-1">
                                        <img src={BedIcon} alt="Bed Icon" width="13px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-left">2 beds</p>
                                        <img src={KitchenIcon} alt="Kitchen Icon" width="13px" />
                                        <p className="ml-[-20px] h-content-property-card-p2 text-left">1 kitchen</p>
                                        <img src={BathroomIcon} alt="Bathroom Icon" width="13px" />
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
            <div className='h-content-review flex justify-center w-[500px] px-4 mt-[40px] mx-auto'>
                <img src={Header1} alt='Header 1' width='450px'/>
            </div>

            {/* CONTENT - 3 - OFFERS */}
            <div className='flex flex-col h-auto w-[500px] mt-[30px] mx-auto'>
                <div className='flex grid-cols-2 h-auto w-[420px] mx-auto gap-6'>
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
                <div className='flex grid-cols-2 h-auto w-[420px] mt-[20px] mx-auto gap-6'>
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
            <div className='h-content-review flex justify-center w-[500px] px-4 mt-[40px] mx-auto'>
                <img src={Header2} alt='Header 2' width='450px'/>
            </div>

            {/* CONTENT - 4 - REVIEWS */}
            <div className='bg-white w-auto h-auto flex flex-col items-center -m-4 mt-[120px] p-4'>
                <div className=' w-[400px] flex flex-col items-center bg-white rounded-[20px] mt-[-50px] p-4 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]'>
                    
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
        <div className='flex flex-col h-auto items-center mx-[10px] py-[20px] gap-4'>

            <button class="fixed bottom-5 right-5 bg-white text-white p-3 rounded-full shadow-lg">
                <svg class="w-4 h-4" viewBox="0 0 384 512">
                    <path
                        fill="#0C2C55"
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>


            <img src={LandscapeLogo} width="150px" height="75px" />
            <p className='h-footer-p w-[275px]'>North Realty – A family-owned agency of brokers and agents, curating trusted property listings for every homebuyer. 🏡💙</p>
            <div className='flex flex-col-2 items-center gap-2'>
                <div className='flex h-footer-contact items-center gap-1'>
                    <img src={IconEmail} width="13px" height="75px" />
                    <p>juandelacruz@gmail.com</p>
                </div>
                <div className='flex h-footer-contact items-center gap-1'>
                    <img src={IconPhone} width="13px" height="75px" />
                    <p>+63 912 345 6789</p>
                </div>
            </div>
            <p className='h-footer-copyright'>Copyright North Realty</p>
        </div>
      
    </div>
  )
}

export default Home
