import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const teacherProfile = () => {
    const id = useParams()
    const [data,setData] = useState([])
    const [month,setMonth] = useState([])
useEffect(()=>{
    fetch('https://school-ebon-eight.vercel.app/api/month')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        setData(data)
    })
},[])

  return (
    <div className="w-full flex flex-col bg-slate-100">
            <div className="w-full flex flex-row items-center justify-around mt-10">
                <h2 className="text-xl py-2 px-8 rounded-full shadow-xl bg-white">FHB</h2>
                <span className="text-xl py-2 px-8 rounded-full shadow-xl bg-white">Teacher's Details</span>
            </div>
            {data.filter(item => {
                if (item.tId == id) {
                    return item
                }
            }).map(item => {
                return (
                    <div className="mx-20 my-10 w-10/12 flex flex-col border-[1px] text-xl shadow-xl" key={item._id}>
                    {/* ================Section Header of the page================  */}
                        <div className="p-8 shadow-lg bg-white w-full grid grid-cols-3">
                           <div className="col-span-2">
                                <span className="text-semibold text-xl border-b-2 border-slate-500">Teacher Information</span>
                                <h2 className="text-4xl pt-4 pb-2">{item.tName}</h2>
                                <div className="flex flex-row items-center justify-start space-x-2">
                                    <span className="text-sm font-semibold px-4 y-1 bg-red-600 text-white rounded-full shadow-lg">{item.tDesignation}</span>
                                    <span className="text-sm font-semibold px-4 y-1 bg-red-600 text-white rounded-full shadow-lg">{item.tId}</span>
                                    <span className="text-sm font-semibold px-4 y-1 bg-red-600 text-white rounded-full shadow-lg">{item.tShift}</span>
                                    <span className="text-sm font-semibold px-4 y-1 bg-red-600 text-white rounded-full shadow-lg">{item.tJoiningDate}</span>
                                </div>
                           </div>
                           <div className="col-span-1 flex flex-row items-cemter justify-end">
                                <img src="https://placehold.co/100" alt="Picture" />
                           </div>
                        </div>
                        {/* ===================Teacher Activity Details============= */}
                        <div className="w-full">
                            <h2 className="w-full px-4 py-2 bg-sky-500 text-white text-md">Personal Information</h2>
                            <div className="flex flex-col">
                                <div className="flex flex-row">
                                    <label htmlFor="" className="text-sm font-semibold px-4 py-1">Degicnation :</label>
                                    <span className="text-sm font-semibold px-4 py-1">{item.tDesignation}</span>
                                </div>
                                <div className="flex flex-row">
                                    <label htmlFor="" className="text-sm font-semibold px-4 py-1">TID :</label>
                                    <span className="text-sm font-semibold px-4 py-1">{item.tId}</span>
                                </div>
                                <div className="flex flex-row">
                                    <label htmlFor="" className="text-sm font-semibold px-4 py-1">Shift :</label>
                                    <span className="text-sm font-semibold px-4 py-1">{item.tShift}</span>
                                </div>
                                <div className="flex flex-row">
                                    <label htmlFor="" className="text-sm font-semibold px-4 py-1">Joining Date :</label>
                                    <span className="text-sm font-semibold px-4 py-1">{item.tJoiningDate}</span>
                                </div>
                            </div>
                        </div>
                        {/* ===================Teacher Activity Details============= */}
                        <div className="w-full">
                            <h2 className="w-full px-4 py-2 bg-green-500 text-white text-md">Salary Information</h2>
                            <div className="w-full grid grid-cols-12 px-4 py-[1px] bg-sky-400 text-sm text-white">
                                {month.map(item=>{
                                    return(
                                        <span className="col-span-1">{item.mName}</span>
                                    )
                                })}
                                
                            </div>
                            
                        </div>
                    </div>
                )
            })}
        </div>
  )
}

export default teacherProfile