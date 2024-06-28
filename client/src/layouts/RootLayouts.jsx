import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayouts = () => {
    return (
        <>
            <div className="w-full">
                <Navbar />
                <div className="grid grid-cols-6">
                    <div className="col-span-1">

                    </div>
                    <main className="col-span-5">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}

export default RootLayouts;