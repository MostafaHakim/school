import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Salary = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState([])
    useEffect(() => {
        fetch('https://school-ebon-eight.vercel.app/api/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
                setSearch(data)
            })
    }, [])


    const handelChange = (e) => {
        setSearch(data.filter(item => item.tId.toLowerCase().includes(e.target.value) || item.tName.toLowerCase().includes(e.target.value)))

    }
    return (
        <>
            <div className="w-full py-8 ">
                <form className="grid grid-cols-8 items-center justify-center space-x-3 " action="">
                    <h2 className="col-span-2 text-xl font-semibold">Search TID or Teacher Name:</h2>
                    <input className="col-span-3 focus:outline-none border-[1px] border-stone-200 p-1" type="text" onChange={handelChange} />
                    <div className="col-span-1"></div>
                </form>
                <div className="w-10/12 bg-gray-100 h-screen">
                    <div className="grid grid-cols-5 w-full py-2 bg-sky-400 mt-8 uppercase text-white">
                        <div className="col-span-1 text-center">TID</div>
                        <div className="col-span-1 text-center">Teacher Name</div>
                        <div className="col-span-1 text-center">Desicnation</div>
                        <div className="col-span-1 text-center">Shift</div>
                        <div className="col-span-1 text-center">Create Salary</div>
                    </div>
                    {search.map((item, index) => {
                        return (
                            <div className={`grid grid-cols-5 w-full py-2 uppercase ${(index % 2) = 0 ? "bg-sky-100" : "bg-white"}`} key={index}>
                                <div className="col-span-1 text-center">{item.tId}</div>
                                <div className="col-span-1 text-center">{item.tName}</div>
                                <div className="col-span-1 text-center">{item.tDesignation}</div>
                                <div className="col-span-1 text-center">{item.tShift}</div>
                                <div className="col-span-1 text-center"><Link to={`${item.tId}`} className="px-4 py-1 bg-green-400 text-white">Create</Link></div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    );
}

export default Salary;