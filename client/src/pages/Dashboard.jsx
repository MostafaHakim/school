import SalaryVoucher from "../components/SalaryVoucher";


const Dashbord = () => {
    return (
        <>
            <div className="w-full flex flex-col items-center justify-between h-screen bg-neutral-200 p-8">
                <div className="w-full mx-4 bg-white py-2 px-4 rounded-full shadow-xl">
                    <div className="uppercase text-center text-4xl ">Welcome to Fazlul haque bidhya Niketon</div>
                </div>
                <div className="w-full mx-4 bg-white py-2 px-4 rounded-2xl shadow-xl">
                    <h2 className="text-xl uppercase py-4 border-b-2 border-stone-100">Notice</h2>
                    <div className="w-full px-8">
                        <ol className=" flex flex-col items-start justify-center list-disc text-lg mt-4">
                            <li className="bg-sky-100 px-4 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eius tenetur praesentium.</li>
                            <li className=" px-4 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eius tenetur praesentium.</li>
                            <li className="bg-sky-100 px-4 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eius tenetur praesentium.</li>
                        </ol>
                    </div>
                    <div className="grid grid-cols-4 gap-8 p-12">

                    </div>
                </div>
                <div className="w-full mx-4 bg-white py-2 px-4 rounded-2xl shadow-xl">
                    <h2 className="text-xl uppercase py-4 border-b-2 border-stone-100">Summery of our School</h2>
                    <div className="grid grid-cols-4 gap-8 p-12">
                        <div className="bg-gradient-to-bl from-sky-900 to-sky-500 p-4 text-white">
                            <h2 className="text-xl uppercase">Managemant</h2>
                            <div className="flex flex-row justify-start items-center space-x-2">
                                <span>Total:</span>
                                <span>05</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-bl from-sky-900 to-sky-500 p-4 text-white">
                            <h2 className="text-xl uppercase">Teachers</h2>
                            <div className="flex flex-row justify-start items-center space-x-2">
                                <span>Total:</span>
                                <span>22</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-bl from-sky-900 to-sky-500 p-4 text-white">
                            <h2 className="text-xl uppercase">Students</h2>
                            <div className="flex flex-row justify-start items-center space-x-2">
                                <span>Total:</span>
                                <span>450</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-bl from-sky-900 to-sky-500 p-4 text-white">
                            <h2 className="text-xl uppercase">Others</h2>
                            <div className="flex flex-row justify-start items-center space-x-2">
                                <span>Total:</span>
                                <span>10</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-4 bg-white py-2 px-4 rounded-full shadow-xl">
                    <footer>Created for FHB by Md Mostafa</footer>
                </div>
            </div>
        </>
    );
}

export default Dashbord;