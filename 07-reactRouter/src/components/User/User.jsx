import React from 'react'
import { useParams } from 'react-router';
function User() {
    const {userid} = useParams()
    return (
        <>
            <div className='bg-gray-600 text-center text-white p-14 text-3xl'>User: {userid}</div>
        </>        
    )
}

export default User
