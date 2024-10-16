
import { useEffect, useState } from 'react';

export default function Contact({ listing }) {
    const [Owner, setOwner] = useState(null);  // State to hold Owner information

    useEffect(() => {
        const fetchOwner = async () => {
            try {
                const res = await fetch(`/api/user/${listing.userRef}`);  // Fetch the Owner details
                const data = await res.json();
                console.log("Owner data:", data);  // Check if the contact info is in the data
                setOwner(data);  // Store the fetched Owner data in state
            } catch (error) {
                console.log(error);
            }
        };
        fetchOwner();  // Fetch Owner data when the component mounts
    }, [listing.userRef]);

    return (
        <>
            {Owner && (  // Render only if Owner data is available
                <div className='flex flex-col gap-2'>
                    {/* Directly show the contact details */}
                    <p className='font-semibold'>Owner: {Owner.username}</p>
                    {Owner.contact && Owner.contact.trim() !== '' ? (
                        <p className='font-semibold'>📞: {Owner.contact}</p>
                    ) : (
                        <p className='text-red-500'>Phone number not available</p>
                    )}
                </div>
            )}
        </>
    );
}
