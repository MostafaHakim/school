import { Outlet } from "react-router-dom";


function MonthLayout() {
  return (
    <div className="w-full">
        <main className="col-span-5">
            <Outlet />
        </main>
    </div>
  )
}

export default MonthLayout;

