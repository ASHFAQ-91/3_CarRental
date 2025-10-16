import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import CarCard from '../components/CarCard'
import { useSearchParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const Cars = () => {

    // getting search parameters from URL
    const [searchParams] = useSearchParams();
    const pickupLocation = searchParams.get('pickupLocation');
    const pickupDate = searchParams.get('pickupDate');
    const returnDate = searchParams.get('returnDate');

    const { cars, axios } = useAppContext();

    const [inputs, setInputs] = useState('')

    const isSearchData = pickupLocation && pickupDate && returnDate;
    const [filteredCars, setFilteredCars] = useState([]);

    const applyFilter = async () => {
        if (inputs === '') {
            setFilteredCars(cars);
            return null;
        }
        // owner, brand, model, image, year, category, seating_capacity, fuel_type, transmission, pricePerDay, location, description, isAvaliable
        const filtered = cars.slice().filter((car) => {
            return car.brand.toLowerCase().includes(inputs.toLowerCase())
                || car.model.toLowerCase().includes(inputs.toLowerCase())
                || car.category.toLowerCase().includes(inputs.toLowerCase())
                || car.transmission.toLowerCase().includes(inputs.toLowerCase())
        })
        setFilteredCars(filtered);
    }

    const searchCarAvailability = async () => {
        const { data } = await axios.post('/api/bookings/check-availability', { location: pickupLocation, pickupDate, returnDate });
        if (data.success) {
            setFilteredCars(data.availableCars);
            if (data.availableCars.length === 0) {
                toast('No cars available');
            }
            return null;
        }
    }

    useEffect(() => {
        isSearchData && searchCarAvailability();
    }, [])

    useEffect(() => {
        cars.length > 0 && !isSearchData && applyFilter();
    }, [inputs, cars])

    return (
        <div>
            {/* for Title & Search */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className='flex flex-col items-center py-20 bg-light max-md:px-4'>
                <Title title='Available Cars' subTitle='Browse our selection of premium vehicles available for your next adventure' />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow'>
                    <img src={assets.search_icon} alt="" className='w-4.5 h-4.5 mr-2' />
                    <input
                        onChange={(e) => setInputs(e.target.value)}
                        value={inputs} type="text"
                        placeholder='Search by make, or features'
                        className='w-full h-full outline-none text-gray-500'
                    />
                    <img src={assets.filter_icon} alt="" className='w-4.5 h-4.5 ml-2 ' />
                </motion.div>
            </motion.div>

            {/* No. of Cars or Car List */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>
                <p className='text-gray-500 xl:px-20 max-w-7xl mx-auto'>Showing {filteredCars.length} Cars</p>

                {/* Displaying List of Cars */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto'>
                    {filteredCars.map((car, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <CarCard car={car} />
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </div>
    )
}

export default Cars