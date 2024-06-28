import { useEffect, useState } from "react"


const NewTeacher = () => {
    const [tid, setTid] = useState([])
    const [name, setName] = useState("")
    const [designation, setDesignation] = useState("")
    const [shift, setShift] = useState("")
    const [salary, setSalary] = useState("")
    const [joiningDate, setJoiningDate] = useState("")


    useEffect(() => {
        fetch('https://school-ebon-eight.vercel.app/api/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                const newTid = data.map(item => item.tId)
                const number = newTid.map(item => Number(item))
                const createNewTid = Math.max(...number) + 1
                setTid(createNewTid)
            });
    }, [])


    const newTeacher = {
        tId: tid,
        tName: name,
        tDesignation: designation,
        tShift: shift,
        tSalary: salary,
        tJoiningDate: joiningDate,
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        fetch('https://school-ebon-eight.vercel.app/api/teacher', {
            method: "POST",
            body: JSON.stringify(newTeacher),
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(newTeacher)
    }



    return (
        <>
            <div className="w-9/12">
                <div className="w-full m-10 border-2 border-sky-500 flex flex-col items-center justify-center">
                    <h2 className="text-2xl uppercase text-sky-700 pt-8 border-double border-b-2 border-sky-900">New Teacher Registration Form</h2>
                    <form className="w-full p-8 flex flex-col space-y-2 text-xl" onSubmit={handelSubmit}>
                        <div className="w-full grid grid-cols-5">
                            <label className="col-span-2" htmlFor="tId">TID :</label>
                            <span className="col-span-3">{tid}</span>
                        </div>
                        <div className="w-full grid grid-cols-5">
                            <label className="col-span-2" htmlFor="tId">Name :</label>
                            <input className="col-span-3 focus:outline-none border-[1px] border-slate-300 px-4 placeholder:text-sm" placeholder="Please Enter Full Name!!!" type="text" onChange={(e) => { setName(e.target.value); }} />
                        </div>
                        <div className="w-full grid grid-cols-5">
                            <label className="col-span-2" htmlFor="tId">Designation :</label>
                            <select className="col-span-3 focus:outline-none border-[1px] border-slate-300 px-4" onChange={(e) => { setDesignation(e.target.value); }}>
                                <option>--Select One--</option>
                                <option>Admin</option>
                                <option>Accounts</option>
                                <option>Asst Teacher</option>
                            </select>
                        </div>
                        <div className="w-full grid grid-cols-5">
                            <label className="col-span-2" htmlFor="tId">Shift :</label>
                            <select className="col-span-3 focus:outline-none border-[1px] border-slate-300 px-4" onChange={(e) => { setShift(e.target.value); }}>
                                <option>--Select One--</option>
                                <option>Day</option>
                                <option>Morning</option>
                            </select>
                        </div>
                        <div className="w-full grid grid-cols-5">
                            <label className="col-span-2" htmlFor="tId">Joining Date :</label>
                            <input className="col-span-3 focus:outline-none border-[1px] border-slate-300 px-4 placeholder:text-sm" placeholder="Please Enter Joining Date!!!" type="text" onChange={(e) => { setJoiningDate(e.target.value) }} />

                        </div>
                        <div className="w-full grid grid-cols-5">
                            <label className="col-span-2" htmlFor="tId">Salary :</label>
                            <input className="col-span-3 focus:outline-none border-[1px] border-slate-300 px-4 placeholder:text-sm" placeholder="Please Enter Amount!!!" type="text" onChange={(e) => { setSalary(e.target.value) }} />
                        </div>
                        <button className="px-8 py-2 bg-green-500 text-white mt">Create</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewTeacher;