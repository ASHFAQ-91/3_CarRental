import { assets } from "../assets/assets"

const Footer = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
            <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-b border-borderColor'>
                {/* First Column */}
                <div>
                    <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        {/* Facebook */}
                        <a href="#"><img src={assets.facebook_logo} className="w-5 h-5" alt="" /></a>

                        {/* Instagram */}
                        <a href="#"><img src={assets.instagram_logo} className="w-5 h-5" alt="" /></a>

                        {/* Twitter */}
                        <a href="#"><img src={assets.twitter_logo} className="w-5 h-5" alt="" /></a>

                        {/* Gmail */}
                        <a href="#"><img src={assets.gmail_logo} className="w-5 h-5" alt="" /></a>
                    </div>
                </div>

                {/* Second Column */}
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li className="hover:font-semibold" ><a href="#">Home</a></li>
                        <li className="hover:font-semibold" ><a href="#">Browse Cars</a></li>
                        <li className="hover:font-semibold" ><a href="#">List Your Car</a></li>
                        <li className="hover:font-semibold" ><a href="#">About Us</a></li>
                    </ul>
                </div>

                {/* Third Column */}
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li className="hover:font-semibold"><a href="#">Help Center</a></li>
                        <li className="hover:font-semibold"><a href="#">Terms of Service</a></li>
                        <li className="hover:font-semibold"><a href="#">Privacy Policy</a></li>
                        <li className="hover:font-semibold"><a href="#">Insurance</a></li>
                    </ul>
                </div>

                {/* Forth Column */}
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li>1234 Luxury Drive</li>
                        <li>Rajasthan, Jaipur</li>
                        <li>+91 98765 43210</li>
                        <li>info@example.com</li>
                    </ul>
                </div>
            </div>

            {/* <hr className='border-gray-300 mt-8' /> 👇 */}
            {/* "hr" replaced by border-b               👆 */}

            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a> <span> &emsp; | </span></li>
                    <li><a href="#">Terms</a> <span> &emsp; | </span></li>
                    <li><a href="#">Cookies</a> </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer