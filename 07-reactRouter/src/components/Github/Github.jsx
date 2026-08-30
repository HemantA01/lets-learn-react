import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';

function Github() {
    /*const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/HemantA01')
        .then(res => res.json())
        .then(data => {console.log(data);
        setData(data)
        }) 
    }, [])*/
    const data = useLoaderData()    //To get the data from 'useLoaderdata' hook by passing 'githubInfoLoader' method in 'loader' parameter inside Route in way to optimization 
    return (
        <>
            <div className='flex flex-col justify-center items-center m-4 bg-red-400 text-white p-5 text-3xl'>
                <p>Github Followers: {data.followers}</p>
                <p>Github Following: {data.following}</p>
                <img src={data.avatar_url} alt='Github Image' width={300} height={300} className='mt-7' />
            </div>
        </>
    )
}

export default Github

//API to fetch the data 
export const githubInfoLoader = async () => {
    const respose = await fetch('https://api.github.com/users/HemantA01')
    return respose.json()
}
