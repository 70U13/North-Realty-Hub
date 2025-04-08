import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LSLogoBlue from '../../images/logo/landscape-bg-white-2.png';
import HomeBG from '../../images/bg/13.svg';
import Menu from '../../images/hamburgermenu.svg';
import Header1 from '../../images/header 1.svg';
import HomeOffer from '../../images/home_icon 1.svg';
import AccountOffer from '../../images/accounts_icon 1.svg';
import VerifiedOffer from '../../images/ok_icon 1.svg';
import DealsOffer from '../../images/deals_icon 1.svg';
import Header2 from '../../images/header 2.svg';
import ReviewImg from '../../images/1.jpg';
import QStart from '../../images/quote-start.svg';
import QEnd from '../../images/quote-end.svg';
import IconEmail from '../../images/icons/22.png';
import HamburgerMenu from './Menu.jsx';

const Services = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigateContact = () => {
        navigate('/contact-us'); // Change '/contact' to your desired route
    };

    return (
        <>
            <div className='flex flex-col w-full bg-[#AFD9FF] h-auto'>
      
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
                <div className='relative h-auto z-2 rounded-[30px] bg-[#EFF8FF] p-4 text-white'>

                    {/* CONTENT - HEADER 1 */}
                    <div className='h-content-review flex justify-center w-full px-4 mt-[40px] mx-auto'>
                        <img src={Header1} alt='Header 1' width='450px'/>
                    </div>

                    {/* CONTENT - 3 - OFFERS */}
                    <div className='flex flex-col h-auto w-full mt-[30px] mx-auto'>
                        <div className='flex grid-cols-2 h-auto w-full mx-auto gap-6'>
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
                        <div className='flex grid-cols-2 h-auto w-full mt-[20px] mx-auto gap-6'>
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
    
    );
  }
  
  export default Services;