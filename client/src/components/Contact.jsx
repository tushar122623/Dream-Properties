
import { useEffect, useState } from 'react';

export default function Contact({ listing }) {
    const [landlord, setLandlord] = useState(null);  // State to hold landlord information

    useEffect(() => {
        const fetchLandlord = async () => {
            try {
                const res = await fetch(`/api/user/${listing.userRef}`);  // Fetch the landlord details
                const data = await res.json();
                console.log("Landlord data:", data);  // Check if the contact info is in the data
                setLandlord(data);  // Store the fetched landlord data in state
            } catch (error) {
                console.log(error);
            }
        };
        fetchLandlord();  // Fetch landlord data when the component mounts
    }, [listing.userRef]);

    return (
        <>
            {landlord && (  // Render only if landlord data is available
                <div className='flex flex-col gap-2'>
                    {/* Directly show the contact details */}
                    <p className='font-semibold'>Landlord: {landlord.username}</p>
                    {landlord.contact && landlord.contact.trim() !== '' ? (
                        <p className='font-semibold'>📞: {landlord.contact}</p>
                    ) : (
                        <p className='text-red-500'>Phone number not available</p>
                    )}
                </div>
            )}
        </>
    );
}
