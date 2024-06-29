import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from '../img/logo.png'

const SalaryVoucher = () => {
    const { id } = useParams()
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
            <div className="w-2/3 border-2 border-sky-500 py-2 px-4 flex flex-col items-center justify-center mt-20">
                {data.filter(item => {
                    if (item.tId == id) {
                        return item
                    }
                }).map(item => {
                    return (
                        <table class="table-fixed w-full border-collapse">
                            <caption className="caption-top border border-slate-300">
                                <div className="grid grid-cols-8 w-full">
                                    <div className="col-span-1 p-4 flex flex-row justify-end">
                                        <img className="w-16" src={logo} alt="" />
                                    </div>
                                    <div className="col-span-6 p-4 ">
                                        <h2 className="text-2xl uppercase">Fazlul haque bidhya Niketon</h2>
                                        <span className="text-xl uppercase py-2">Salary Voucher</span>
                                    </div>
                                </div>
                            </caption>
                            <thead>
                                <tr>
                                    <td className="border border-slate-300">TID</td>
                                    <td className="border border-slate-300">{item.tId}</td>
                                    <td className="border border-slate-300">Date</td>
                                    <td className="border border-slate-300">15/12/24</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300">Name</td>
                                    <td className="border border-slate-300">{item.tName}</td>
                                    <td className="border border-slate-300">Joining Date</td>
                                    <td className="border border-slate-300">{item.tJoiningDate}</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300">Designation</td>
                                    <td className="border border-slate-300">{item.tDesignation}</td>
                                    <td className="border border-slate-300">Late</td>
                                    <td className="border border-slate-300">02</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300">Salary</td>
                                    <td className="border border-slate-300">{item.tSalary}</td>
                                    <td className="border border-slate-300">Absent</td>
                                    <td className="border border-slate-300">02</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300">Addition</td>
                                    <td className="border border-slate-300">1000</td>
                                    <td className="border border-slate-300">Diduction</td>
                                    <td className="border border-slate-300">1500</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300">Net Salary</td>
                                    <td className="border border-slate-300">14500</td>
                                    <td className="border border-slate-300">In Word</td>
                                    <td className="border border-slate-300">14500</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
                <div className="grid grid-cols-4 gap-4 items-center justify-around w-full">
                    <div className="mt-16 col-span-1">
                        <h2 className="border-t-2 border-black px-8 text-center">Accounts</h2>
                    </div>
                    <div className="mt-16 col-span-1">
                        <h2 className="border-t-2 border-black px-8 text-center">Admin</h2>
                    </div>
                    <div className="mt-16 col-span-1">
                        <h2 className="border-t-2 border-black px-8 text-center">Head Master</h2>
                    </div>
                    <div className="mt-16 col-span-1">
                        <h2 className="border-t-2 border-black px-8 text-center">Chairman</h2>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-center mt-10 space-x-2">
                <button className="px-12 py-2 bg-sky-500 text-white">Print</button>
                <button className="px-12 py-2 bg-orange-500 text-white">save</button>
            </div>
        </>
    );
}

export default SalaryVoucher;