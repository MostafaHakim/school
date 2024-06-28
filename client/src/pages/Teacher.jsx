import { Link } from "react-router-dom";

const Teacher = () => {
    return (
        <>
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
                    <Link className="mt-4 px-8 py-2 text-white bg-green-500" to="salary">Salary</Link>
                </div>
            </div>
        </>
    );
}

export default Teacher;