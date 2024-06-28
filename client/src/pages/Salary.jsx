import { useEffect, useState } from "react";

const Salary = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://school-ebon-eight.vercel.app/api/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <>
            <div className="w-full py-8 ">
                <form className="grid grid-cols-8 items-center justify-center space-x-3 " action="">
                    <h2 className="col-span-2 text-xl font-semibold">Search TID or Teacher Name:</h2>
                    <input className="col-span-3 focus:outline-none border-[1px] border-stone-200 p-1" type="text" />
                    <button className="col-span-1 py-1 px-4 bg-green-400 text-white hover:bg-green-600 transition-all duretion-700 hover:scale-110 ">Search</button>
                </form>
                <div className="w-10/12 bg-gray-100 h-screen">
                    <div className="grid grid-cols-5 w-full py-2 bg-sky-400 mt-8 uppercase text-white">
                        <div className="col-span-1 text-center">TID</div>
                        <div className="col-span-1 text-center">Teacher Name</div>
                        <div className="col-span-1 text-center">Desicnation</div>
                        <div className="col-span-1 text-center">Shift</div>
                        <div className="col-span-2 text-center">Create Salary</div>
                    </div>
                    {data.map((item) => {
                        return (
                            <div className="grid grid-cols-5 w-full py-2 uppercase bg-white">
                                <div className="col-span-1 text-center">{item.tId}</div>
                                <div className="col-span-1 text-center">{item.tName}</div>
                                <div className="col-span-1 text-center">{item.tDesignation}</div>
                                <div className="col-span-1 text-center">{item.tShift}</div>
                                <div className="col-span-2 text-center"></div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    );
}

export default Salary;