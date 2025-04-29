import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='flex justify-center bg-gray-600 text-2xl text-white p-3'>User: {userid}</div>
  )
}

export default User