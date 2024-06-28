import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Createsalary = (tId, tName) => {
    const { id } = useParams()
    const [data, setData] = useState([])

    const { cId } = useParams()

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
        <div className="w-full flex flex-col">
            {data.filter(item => {
                if (item.tId == id) {
                    return item

                }
            }).map(item => {
                return (
                    <div className="m-20 w-10/12 flex flex-col border-[1px] border-sky-400 text-xl py-4 px-8 space-y-4 shadow-xl" key={item._id}>
                        <h2 className="w-full text-center text-2xl uppercase underline underline-offset-2 pb-2">Salary of the month of Jun 2024</h2>
                        <div className="grid grid-cols-4 w-full">
                            <label className="col-sapn-1" htmlFor="tId">TID</label>
                            <span className="col-sapn-3">{item.tId}</span>
                        </div>
                        <div className="grid grid-cols-4 w-full">
                            <label className="col-sapn-1" htmlFor="tId">Name</label>
                            <span className="col-sapn-3">{item.tName}</span>
                        </div>
                        <div className="grid grid-cols-4 w-full">
                            <label className="col-sapn-1" htmlFor="tId">Designation</label>
                            <span className="col-sapn-3">{item.tDesignation}</span>
                        </div>
                        <div className="grid grid-cols-4 w-full">
                            <label className="col-sapn-1" htmlFor="tId">Shift</label>
                            <span className="col-sapn-3">{item.tShift}</span>
                        </div>
                        <div className="grid grid-cols-4 w-full">
                            <label className="col-sapn-1" htmlFor="tId">Salary</label>
                            <span className="col-sapn-3">9000</span>
                        </div>
                        <div className="grid grid-cols-4 w-full">
                            <label className="col-sapn-1" htmlFor="tId">Late</label>
                            <span className="col-sapn-3">01 days</span>
                        </div>
                        <div className="grid grid-cols-4 w-full">
                            <label className="col-sapn-1" htmlFor="tId">Absent</label>
                            <span className="col-sapn-3">2 days</span>
                        </div>
                        <div className="grid grid-cols-4 w-full">
                            <label className="col-sapn-1" htmlFor="tId">Diduction</label>
                            <span className="col-sapn-3">500</span>
                        </div>
                        <div className="grid grid-cols-4 w-full">
                            <label className="col-sapn-1" htmlFor="tId">Addition</label>
                            <input className="col-sapn-3" type="text" placeholder="00" />
                        </div>
                        <div className="grid grid-cols-4 w-full">
                            <label className="col-sapn-1" htmlFor="tId">Net Salary</label>
                            <span className="col-sapn-3">Net Salary</span>
                        </div>
                        <div className="w-full">
                            <button className="transition-all ease-linear  duration-700 w-1/3 px-4 py-1 bg-sky-500 text-white shadow-lg hover:bg-pink-700 hover:w-2/3">Calculate</button>
                            <Link to={`${id}`} className="transition-all ease-linear  duration-700 px-4 py-1 bg-pink-500 text-white shadow-lg hover:bg-pink-700 w-1/3 hover:w-2/3 ">Create Voucher</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Createsalary;