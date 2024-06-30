import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="w-full flex flex-row items-center justify-between px-10 bg-sky-600 text-white">
            <h2 className="text-2xl uppercase">Fazlul haque bidhya niketon</h2>
            <div className="flex flex-row items-center justify-center uppercase">
                <NavLink to="/" className="transition-all ease-linear  duration-700 px-4 py-4 hover:bg-sky-900 ">Dashbord</NavLink>
                <NavLink to="teacher" className="transition-all ease-linear  duration-700 px-4 py-4 hover:bg-sky-900 ">Teacher Panel</NavLink>
                <NavLink to="student" className="transition-all ease-linear  duration-700 px-4 py-4 hover:bg-sky-900 ">Student Panel</NavLink>
                <NavLink to="about" className="transition-all ease-linear  duration-700 px-4 py-4 hover:bg-sky-900 ">About</NavLink>
            </div>
        </div>
    );
}

export default Navbar;