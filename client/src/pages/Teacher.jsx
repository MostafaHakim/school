import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Teacher = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://school-ebon-eight.vercel.app/api/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
    })
    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(search)
    }
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="w-full grid grid-cols-4 p-10 gap-4">
                    <div className="border-[1px] border-sky-300 flex flex-col items-center justify-around rounded-xl">
                        <h2 className="text-xl uppercase bg-sky-400 w-full rounded-t-xl py-1 text-center text-white">Teacher States</h2>
                        <div className="grid grid-cols-3 items-start justify-start w-full px-4">
                            <label htmlFor="Total" className="col-span-1">Total Teacher:</label>
                            <span className="col-span-2">22</span>
                        </div>
                        <div className="grid grid-cols-3 items-start justify-start w-full px-4">
                            <label htmlFor="Total" className="col-span-1">Day Shift:</label>
                            <span className="col-span-2">10</span>
                        </div>
                        <div className="grid grid-cols-3 items-start justify-start w-full px-4">
                            <label htmlFor="Total" className="col-span-1">Morning Shift:</label>
                            <span className="col-span-2">12</span>
                        </div>
                    </div>
                    <div className="border-[1px] border-sky-300 flex flex-col items-center justify-start rounded-xl">
                        <h2 className="text-xl uppercase bg-sky-400 w-full rounded-t-xl py-1 text-center text-white">Teacher Salary</h2>
                        <Link className="transition-all ease-linear  duration-300 mt-4 px-8 py-2 text-white bg-green-500 hover:bg-green-700" to="salary">Salary</Link>
                    </div>
                    <div className="border-[1px] border-sky-300 flex flex-col items-center justify-start rounded-xl">
                        <h2 className="text-xl uppercase bg-sky-400 w-full rounded-t-xl py-1 text-center text-white">New Teacher</h2>
                        <Link className="transition-all ease-linear  duration-300 mt-4 px-8 py-2 text-white bg-green-500 hover:bg-green-700" to="new">Create Teacher</Link>
                    </div>
                    <div className="border-[1px] border-sky-300 flex flex-col items-center justify-start rounded-xl">
                        <h2 className="text-xl uppercase bg-sky-400 w-full rounded-t-xl py-1 text-center text-white">Late And Absent Count</h2>
                        <div className="grid grid-cols-3 p-4">
                            <label className="col-span-1" htmlFor="search">Search:</label>
                            <input className="col-span-2 focus:outline-none border-[1px] border-slate-200 px-4" type="text" onChange={handleChange} />
                        </div>
                        <Link className="transition-all ease-linear  duration-300 mb-2 px-8 py-2 text-white bg-green-500 hover:bg-green-700" to="new">Create Teacher</Link>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    {data.filter(item => {
                        if (item.tId == search) {
                            return item
                        }
                    }).map(item => {
                        return (
                            <div className="w-2/3 p-8 border-[1px] border-sky-400 grid grid-cols-4 gap-4">
                                <div className="col-span-1">
                                    <h2 className="py-2">{item.tName}</h2>
                                </div>
                                <div className="col-span-1">
                                    <input type="text" className="border-[1px] border-slate-300 focus:outline-none px-4 py-2" placeholder={`Late in this month`} />
                                </div>
                                <div className="col-span-1">
                                    <input type="text" className="border-[1px] border-slate-300 focus:outline-none px-4 py-2" placeholder={`Absent in this month`} />
                                </div>
                                <div className="col-span-1">
                                    <button className="px-8 py-2  bg-green-500 text-white">Add</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    );
}

export default Teacher;