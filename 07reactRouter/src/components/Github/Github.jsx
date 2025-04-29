import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {

  const data = useLoaderData();

    // const [data, setData] = useState(0);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Parth-02-2005')
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    // }, [Github])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-3 text-3xl'>Github Name: {data.login}
    <img src={data.avatar_url} alt="error" className='w-100'/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
 
  const response = await fetch('https://api.github.com/users/Parth-02-2005')
  .then((response) => response.json())
  return response

}