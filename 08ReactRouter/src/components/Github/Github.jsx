import React,{useEffect, useState} from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
     fetch('https://api.github.com/users/hiteshchoudhary')
     .then(response=>response.json())
     .then(data=>{
        console.log(data);
        setData(data);
     })
    },[])

  return (
    <div className='flex item-center justify-center m-4 bg-gray-600 text-white p-4 text-3xl'>
       
    <img src={data.avatar_url} alt="" width={50} className='rounded-full' />
        <div className='px-3'> Github Followers:{data.followers}</div>
    </div>
  )
}

export default Github