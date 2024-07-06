import React, { useEffect, useState } from 'react'
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import {Link, useParams} from 'react-router-dom'

function Teacher() {

    const [data,setData] =useState([])

    useEffect(()=>{
        fetch('https://school-ebon-eight.vercel.app/api/teacher')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setData(data)
        })
    },[])
  return (
    <div className='w-full'>
        <div className='w-10/12 m-auto mt-10 flex flex-col'>
            <div className='w-full py-2 px-4 bg-sky-500 grid grid-cols-6 text-sm text-white uppercase text-left'>
                <span className='col-span-1'>Tid</span>
                <h2 className='col-span-1'>Name</h2>
                <span className='col-span-1'>Designation</span>
                <span className='col-span-1'>Shift</span>
            </div>
            {
                data.map(item=>{
                    return (
                        <div className={`w-full py-[4px] px-4 grid grid-cols-6 text-sm  capitalize  text-left ${item.tId % 2==0 ? 'bg-white': "bg-slate-200"}`} key={item.tId}>
                            <span className='col-span-1'>{item.tId}</span>
                            <h2 className='col-span-1'>{item.tName}</h2>
                            <span className='col-span-1'>{item.tDesignation}</span>
                            <span className='col-span-1'>{item.tShift}</span>
                            <div className='col-span-2 flex flex-row items-center justify-evenly'>
                                <Link to={`${item.tId}`} className='transition duration-700 px-4 py-[1px] rounded-lg text-orange-400 hover:text-orange-800'>Details</Link>
                                <button className='transition duration-700 text-sky-400 hover:text-sky-800'><FaRegEdit /></button>
                                <button className='transition duration-700 text-red-400 hover:text-red-800'><FaTrashAlt /></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Teacher