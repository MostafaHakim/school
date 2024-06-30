import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Createsalary = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [late, setLate] = useState('')
    const [absent, setAbsent] = useState('')
    const [salary, setSalary] = useState('')
    const [newMonth, setNewMonth] = useState('')
    const [month, setMonth] = useState('')
    const [netSalary, setNetSalary] = useState('')


    useEffect(() => {
        fetch('https://school-ebon-eight.vercel.app/api/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            });
    }, [])



    const handelClick = (e) => {
        e.preventDefault()

        data.map(item => {
            setSalary(item.tSalary)
        })



    }
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
                        <div className="p-8 shadow-lg bg-white w-full">
                            <span className="text-semibold text-xl border-b-2 border-slate-500">Teacher Information</span>
                            <h2 className="text-4xl pt-4 pb-2">{item.tName}</h2>
                            <div className="flex flex-row items-center justify-start space-x-2">
                                <span className="text-sm font-semibold px-4 y-1 bg-red-600 text-white rounded-full shadow-lg">{item.tDesignation}</span>
                                <span className="text-sm font-semibold px-4 y-1 bg-red-600 text-white rounded-full shadow-lg">{item.tId}</span>
                                <span className="text-sm font-semibold px-4 y-1 bg-red-600 text-white rounded-full shadow-lg">{item.tShift}</span>
                            </div>
                        </div>
                        <div className="w-full p-8 shadow-lg bg-white mt-10 grid grid-cols-2 gap-8">
                            <div className="w-full col-span-1">
                                <div className="w-full py-2 px-4 text-center bg-orange-500 text-white uppercase">coming monthly salary</div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <span className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg" id="mName">January</span>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg" onClick={handelClick}>Create</button>
                                </div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <div className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg">February</div>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg">Create</button>
                                </div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <div className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg">March</div>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg">Create</button>
                                </div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <div className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg">April</div>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg">Create</button>
                                </div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <div className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg">May</div>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg">Create</button>
                                </div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <div className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg">June</div>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg">Create</button>
                                </div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <div className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg">July</div>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg">Create</button>
                                </div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <div className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg">August</div>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg">Create</button>
                                </div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <div className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg">september</div>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg">Create</button>
                                </div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <div className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg">October</div>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg">Create</button>
                                </div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <div className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg">November</div>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg">Create</button>
                                </div>
                                <div className="flex flex-row items-center justify-between px-4 py-2">
                                    <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                    <div className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg">December</div>
                                    <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg">Create</button>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="w-full py-2 px-4 text-center bg-red-500 text-white uppercase">Salary Creator Form</div>
                                <div className="flex flex-col">
                                    <div className="grid grid-cols-3 py-2 items-center gap-4">
                                        <label className="col-span-1 text-center text-sm font-semibold px-4 y-1 text-orange-600 border-[1px] border-orange-600 rounded-full shadow-lg" htmlFor="">Month</label>
                                        <span className="col-span-1 text-center text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">{month}</span>
                                    </div>
                                    <div className="grid grid-cols-3 py-2 items-center gap-4">
                                        <label className="col-span-1 text-center text-sm font-semibold px-4 y-1 text-orange-600 border-[1px] border-orange-600 rounded-full shadow-lg" htmlFor="">Salary</label>
                                        <span className="col-span-1 text-center text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">{`TK ${salary}`}</span>
                                    </div>
                                    <div className="grid grid-cols-3 py-2 items-center gap-4">
                                        <label className="col-span-1 text-center text-sm font-semibold px-4 y-1 text-orange-600 border-[1px] border-orange-600 rounded-full shadow-lg" htmlFor="">Late</label>
                                        <input type="text" className=" focus:outline-none border-[1px] border-orange-600 h-[22px] rounded-full shadow-lg px-8 text-sm font-semibold text-center" onChange={(e) => { setLate(e.target.value) }} />
                                    </div>
                                    <div className="grid grid-cols-3 py-2 items-center gap-4">
                                        <label className="col-span-1 text-center text-sm font-semibold px-4 y-1 text-orange-600 border-[1px] border-orange-600 rounded-full shadow-lg" htmlFor="">Absent</label>
                                        <input type="text" className=" focus:outline-none border-[1px] border-orange-600 h-[22px] rounded-full shadow-lg px-8 text-sm font-semibold text-center" onChange={(e) => { setAbsent(e.target.value) }} />
                                    </div>
                                    <div className="grid grid-cols-3 py-2 items-center gap-4">
                                        <label className="col-span-1 text-center text-sm font-semibold px-4 y-1 text-orange-600 border-[1px] border-orange-600 rounded-full shadow-lg" htmlFor="">Net Salary</label>
                                        <span className="col-span-1 text-center text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg" onChange={(e) => { setNetSalary(e.target.value) }} >{netSalary}</span>
                                    </div>
                                </div>
                                <button className="w-full text-center text-sm font-semibold px-4 y-1 text-orange-600 border-[1px] border-orange-600 rounded-full shadow-lg hover:text-white hover:bg-orange-600">Create Salary</button>
                            </div>
                        </div>
                        <div>
                            <div className="w-full">
                                <div className="w-full py-2 px-4 text-center bg-green-500 text-white uppercase">Created Salary</div>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Createsalary;