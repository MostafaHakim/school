import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const Createsalary = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [shift, setShift] = useState('')
    const [late, setLate] = useState('')
    const [absent, setAbsent] = useState('')
    const [salary, setSalary] = useState('')
    const [newMonth, setNewMonth] = useState([])
    const [month, setMonth] = useState('')
    const [netSalary, setNetSalary] = useState(0)
   

    
    // ================================= input voucher data to new table from teacher table hook================
    const [name,setName]=useState('')
    const [designation,setDesignation] = useState('')
    const [joiningDate,setJoiningDate] = useState('')
    const [voucher,setVoucher] = useState([])
    const [diduction,setDiduction] = useState([])
    const [toggle,setToggle] = useState(false)
    const [addition,setAddition] = useState('')
  

    const calculateSalaryForDay = parseInt(salary) - (((parseInt(late) >= 2 && shift == 'Day' ? (parseInt(late) * 100) : 0) + parseInt(salary) / 30 * parseInt(absent)))
    const calculateSalaryForMor = parseInt(salary) - (((parseInt(late) >= 2 && shift == 'Morning' ? (parseInt(late) * 50) : 0) + parseInt(salary) / 30 * parseInt(absent)))
    console
    useEffect(() => {
        fetch('https://school-ebon-eight.vercel.app/api/teacher')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            });
    }, [])

    useEffect(() => {
        fetch('https://school-ebon-eight.vercel.app/api/month')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setNewMonth(data)
            });

    }, [])
   
   
    const salaryVoucher={
            tId:id,
            tName:name,
            tDesignation:designation,
            tShift:shift,
            tJoiningDate:joiningDate,
            tSalary:salary,
            tSmonth:month,
            tLate:late,
            tAbsent:absent,
            tDiduction:diduction,
            tAddition:0,
            tNetSalary:netSalary
    }
 const salaryClick = async(e) =>{
    e.preventDefault()
    await fetch('https://school-ebon-eight.vercel.app/api/salary',{
        method:"POST",
        body:JSON.stringify(salaryVoucher),
        headers:{
            "Content-Type":"application/json"
        }
    })
 }
 useEffect(()=>{
    fetch('https://school-ebon-eight.vercel.app/api/salary')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        setVoucher(data)
    })
},[])

const calculateSalaryClick =(e) => { 
    e.preventDefault(); 
    setNetSalary((shift == 'Day') ? Math.ceil(calculateSalaryForDay) : Math.ceil(calculateSalaryForMor))
    setDiduction((shift == 'Day') ? salary - Math.ceil(calculateSalaryForDay) : salary -  Math.ceil(calculateSalaryForMor))

 }
const handelDetailsVoucher=(e)=>{
    e.preventDefault()
    setToggle(!toggle)
}
const handelAddition = (e) =>{
    e.preventDefault()

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
                                <span className="text-sm font-semibold px-4 y-1 bg-red-600 text-white rounded-full shadow-lg">{item.tJoiningDate}</span>
                            </div>
                        </div>
                        <div className="w-full p-8 shadow-lg bg-white mt-10 grid grid-cols-2 gap-8">
                            <div className="w-full col-span-1">
                                <div className="w-full py-2 px-4 text-center bg-orange-500 text-white uppercase">coming monthly salary</div>
                                {newMonth.map((item) => {
                                    return (
                                        <div className="flex flex-row items-center justify-between px-4 py-2">
                                            <div className="text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">Month Name</div>
                                            <span className="text-sm font-semibold px-4 y-1 text-red border-[1px] border-red rounded-full shadow-lg" id="mName" key={item._id}>{item.mName}</span>
                                            <button className="text-sm font-semibold px-4 y-1 bg-sky-600 text-white rounded-xl shadow-lg"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setMonth(item.mName)
                                                    data.filter(item => {
                                                        if (item.tId == id) {
                                                            return item
                                                        }
                                                    }).map(data => {
                                                        setSalary(data.tSalary)
                                                        setShift(data.tShift)
                                                        setName(data.tName)
                                                        setDesignation(data.tDesignation)
                                                        setJoiningDate(data.tJoiningDate)
                                                    })
                                                    setNetSalary(0)
                                                }}>Create</button>
                                        </div>
                                    )
                                })}

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
                                        <label className="col-span-1 text-center text-sm font-semibold px-4 y-1 text-orange-600 border-[1px] border-orange-600 rounded-full shadow-lg" htmlFor="">Diduction</label>
                                        <span className="col-span-1 text-center text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">{diduction}</span>
                                    </div>
                                    <div className="grid grid-cols-3 py-2 items-center gap-4">
                                        <label className="col-span-1 text-center text-sm font-semibold px-4 y-1 text-orange-600 border-[1px] border-orange-600 rounded-full shadow-lg" htmlFor="">Net Salary</label>
                                        <span className="col-span-1 text-center text-sm font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">{netSalary}</span>
                                    </div>
                                </div>

                                <button className="w-full text-center text-sm font-semibold px-4 y-1 text-green-600 border-[1px] border-green-600 rounded-full shadow-lg hover:text-white hover:bg-green-600" onClick={calculateSalaryClick}>Calculate</button>
                                <button className="w-full text-center text-sm font-semibold px-4 y-1 text-orange-600 border-[1px] border-orange-600 rounded-full shadow-lg hover:text-white hover:bg-orange-600" onClick={salaryClick}>Create Salary</button>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full flex flex-col">
                                <div className="w-full py-2 mb-2 px-4 text-center bg-green-500 text-white uppercase">Created Salary</div>
                                     {voucher.filter(item=>{
                                        if(item.tId==id){
                                            return item
                                        }
                                     }).map(item=>{
                                        return(
                                        <div className="w-full">
                                        <div className="w-full grid grid-cols-5 gap-8 text-sm px-4 py-1">
                                        <h2 className="col-span-1 text-center font-semibold px-4 y-1 text-green-600 border-[1px] border-green-600 rounded-full shadow-lg">{item.tName}</h2>
                                        <span className="col-span-1 text-center font-semibold px-4 y-1 bg-orange-600 text-white rounded-full shadow-lg">{item.tDesignation}</span>
                                        <span className="col-span-1 text-center font-semibold px-4 y-1 text-green-600 border-[1px] border-green-600 rounded-full shadow-lg">{item.tSmonth}</span>
                                        <div className="col-span-2 flex flex-row items-center justify-evenly">
                                                <button className="text-center font-semibold px-4 y-1 bg-orange-600 text-white rounded-xl shadow-lg" onClick={handelDetailsVoucher}>Details</button>
                                                <Link to={item.tSmonth} className="text-center font-semibold px-4 y-1 bg-green-600 text-white rounded-xl shadow-lg" >Create Voucher</Link>
                                        </div>
                                        </div>
                                        <div className="w-full">
                        {toggle ?  <div>
                             <div className={`w-2/3 ${toggle} grid grid-cols-4 gap-4 p-4 text-sm capitalize border-[1px] m-auto `}>
                                    <span className="px-4 py-1 rounded-xl text-white bg-green-500">id</span>
                                    <span className="px-4 py-1 rounded-xl text-white bg-green-500">name</span>
                                    <span className="px-4 py-1 rounded-xl text-white bg-green-500">designation</span>
                                    <span className="px-4 py-1 rounded-xl text-white bg-green-500">Shift</span>
                                    <span className="px-4 py-1 rounded-xl text-white bg-green-500">Joimimgdate</span>
                                    <span className="px-4 py-1 rounded-xl text-white bg-green-500">Salary</span>
                                    <span className="px-4 py-1 rounded-xl text-white bg-green-500">Month</span>
                                    <span className="px-4 py-1 rounded-xl text-white bg-green-500">Late</span>
                                    <span className="px-4 py-1 rounded-xl text-white bg-green-500">absent</span>
                                    <span className="px-4 py-1 rounded-xl text-white bg-green-500">diduction</span>
                                    <input type="text" className="px-4 py-1 rounded-xl text-green-500 bg-white placeholder:text-xs focus:outline-none border-[1px] border-green-500" placeholder="Addition" onChange={(e)=>{setAddition(e.target.value)}}/>
                                    <span className="px-4 py-1 rounded-xl text-white bg-green-500">NetSalry</span>
                                    {/* tId:id,
                                        tName:name,
                                        tDesignation:designation,
                                        tShift:shift,
                                        tJoiningDate:joiningDate,
                                        tSalary:salary,
                                        tSmonth:month,
                                        tLate:late,
                                        tAbsent:absent,
                                        tDiduction:diduction,
                                        tNetSalary:netSalary */}
                                    </div> 
                             <button className="w-full py-2 px-4 bg-orange-500 text-white text-sm uppercase" onClick={handelAddition}>Addition</button>
                                </div>
                            : null}
                        </div>
                                        </div>
                                        )}
                                     )}
                            </div>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    );
}

export default Createsalary;