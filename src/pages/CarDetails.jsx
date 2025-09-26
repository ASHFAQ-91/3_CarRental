import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets';
import { useEffect, useState } from 'react';

const CarDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [car, setCar] = useState(null);

    useEffect(() => {
        setCar(dummyCarData.find(car => car._id === id))
    }, [id])

    return car ? (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
            <button onClick={() => navigate(-1)} className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'>
                <img src={assets.arrow_icon} alt="" className='rotate-180 opacity-65' />
                Back to all Cars
            </button>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
                {/* Left: Car Image & Details */}
                <div className='lg:col-span-2'>
                    <img src={car.image} alt="" className='w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md' />
                    <div className='space-y-6'>
                        <div>
                            <h1 className='text-3xl font-bold'>{car.brand} {car.model}</h1>
                            <p className='text-gray-500 text-lg'>{car.category} &middot; {car.year} </p>
                        </div>
                        <hr className='border-borderColor my-6' />

                    </div>
                </div>

                {/* Right: Booking Form  */}
                <form action="">

                </form>
            </div>

            <h1>Hello Everyone kese ho aap sablog</h1>
        </div>
    ) : <p>Loading...</p>
}

export default CarDetails