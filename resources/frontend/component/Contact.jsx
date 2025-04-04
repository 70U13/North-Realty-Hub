import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import LandscapeLogo from '../../images/landscape-bg-blue-2.png';
import Menu from '../../images/Nav Bar.svg';
import HamburgerMenu from './Menu.jsx';
import Profile from '../../images/user.png';
import Email from '../../images/envelope.svg';
import IconEmail from '../../images/icon-email.svg';
import IconPhone from '../../images/icon-phone.svg';

const Contact = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOtherSelected, setIsOtherSelected] = useState(false);
    const [errors, setErrors] = useState("");

    const context = useOutletContext();
    //const setCurrentStep = context.setCurrentStep;
    //const setFormData = context.setFormData;
    //const formData = context.formData;

    const [subject, setSubject] = useState('');
  const [customSubject, setCustomSubject] = useState('');

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
                
                <div className='flex flex-col justify-center my-10 mx-10 gap-4'>
                    <p className='c-top-p1'>Get in Touch with North Realty – Your Trusted Property Experts 🏡</p>
                    <p className='mt-3 c-top-p2'>Have questions or need assistance? </p>
                    <p className='c-top-p3'>Whether you're looking to buy, sell, or learn more about our services, we're here to help. 
                    <br /> Fill out the form below, and our team will get back to you as soon as possible!</p>
                </div>
                
            </div>

            {/* CONTENT */}
            <div className='h-auto rounded-[30px] bg-[#EAEAEA] pt-10 pb-40'>
                <form className="flex flex-col gap-3 p-4 w-[400px] mx-auto c-form-p1">

                    <div className="relative">
                        <img src={Profile} alt="Profile Icon" className="absolute left-5 top-5 w-[13px]" />
                        <input type="text" placeholder="Full Name" maxLength={40} className="h-[38px] mt-1 pl-12 p-4 border rounded-[10px] w-full" />
                    </div>

                    <div className="relative">
                        <img src={Email} alt="Profile Icon" className="absolute left-5 top-5 w-[14px] h-[14px]" />
                        <input type="text" placeholder="Enter your email" maxLength={40} className="h-[38px] mt-1 pl-12 p-4 border rounded-[10px] w-full" />
                    </div>

                    <div className="relative">
                        <img src={Email} alt="Profile Icon" className="absolute left-5 top-5 w-[14px] h-[14px]" />
                        <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                            className="h-[38px] mt-1 pl-12 pr-3 p-2 border rounded-[10px] w-full bg-white appearance-none"
                        >
                            <option value="" disabled>Select a subject</option>
                            <option value="consultation">Request for Consultation</option>
                            <option value="buying">Buying a Property Inquiry</option>
                            <option value="selling">Selling My Property</option>
                            <option value="scheduling">Schedule a Property Viewing</option>
                            <option value="other">Other</option>
                            
                        </select>
                    </div>

                    {/* Hidden Input for Custom Subject */}
                    {subject === 'other' && (
                        <input
                        type="text"
                        placeholder="Please specify your subject"
                        value={customSubject}
                        onChange={(e) => setCustomSubject(e.target.value)}
                        className="h-[38px] p-4 border rounded-[10px] w-full"
                        />
                    )}

                    <label className="ml-2 mt-4 c-form-label">
                        Message:
                    </label>
                    <textarea placeholder="Input your queries here..." maxLength={255} className="h-[190px] p-4 border rounded-[10px] w-full resize-none" />
                    
                    <button type="submit" className="w-full bg-[#0C2C55] h-[38px] mt-5 c-form-btn text-white px-4 py-2 rounded-[5px] hover:bg-blue-700">
                        SEND
                    </button>
                
                </form>
            </div>

            {/* FOOTER */}
            <div className='flex flex-col h-auto items-center mx-[10px] py-[20px] gap-4'>
    
                <button className="fixed bottom-5 right-5 bg-white text-white p-3 rounded-full shadow-lg">
                    <svg className="w-4 h-4" viewBox="0 0 384 512">
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

export default Contact