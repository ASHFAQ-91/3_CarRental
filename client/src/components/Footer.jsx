import { assets } from "../assets/assets"
import { motion } from "motion/react"

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex flex-wrap justify-between items-start gap-8 pb-6 border-b border-borderColor'>
                {/* First Column */}
                <div>
                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        src={assets.logo} alt="logo" className='h-8 md:h-9' />
                    <motion.p
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='max-w-80 mt-3'>
                        Premium car rental service with a wide selection of sports and everyday vehicles for all your driving needs.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className='flex items-center gap-3 mt-6'>
                        {/* Facebook */}
                        <a href="#"><img src={assets.facebook_logo} className="w-5 h-5" alt="" /></a>

                        {/* Instagram */}
                        <a href="#"><img src={assets.instagram_logo} className="w-5 h-5" alt="" /></a>

                        {/* Twitter */}
                        <a href="#"><img src={assets.twitter_logo} className="w-5 h-5" alt="" /></a>

                        {/* Gmail */}
                        <a href="#"><img src={assets.gmail_logo} className="w-5 h-5" alt="" /></a>
                    </motion.div>
                </div>

                {/* Second Column */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li className="hover:font-semibold" ><a href="/">Home</a></li>
                        <li className="hover:font-semibold" ><a href="/cars">All Cars</a></li>
                        <li className="hover:font-semibold" ><a href="/my-bookings">My Bookings</a></li>
                        <li className="hover:font-semibold" ><a href="/owner/add-car">Add Your Car</a></li>
                    </ul>
                </motion.div>

                {/* Third Column */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li className="hover:font-semibold"><a href="#">About Us</a></li>
                        <li className="hover:font-semibold"><a href="#">Help Center</a></li>
                        <li className="hover:font-semibold"><a href="#">Privacy Policy</a></li>
                        <li className="hover:font-semibold"><a href="#">Insurance</a></li>
                    </ul>
                </motion.div>

                {/* Forth Column */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li>BBT Sports Drive</li>
                        <li>Jaipur, Rajasthan</li>
                        <li>+91 98765 43210</li>
                        <li>info@example.in</li>
                    </ul>
                </motion.div>
            </motion.div>

            {/* <hr className='border-gray-300 mt-8' /> 👇 */}
            {/* "hr" replaced by border-b               👆 */}

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a> <span> &emsp; | </span></li>
                    <li><a href="#">Terms</a> <span> &emsp; | </span></li>
                    <li><a href="#">Cookies</a> </li>
                </ul>
            </motion.div>
        </motion.div>
    )
}

export default Footer