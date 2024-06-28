import { useEffect, useState } from "react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayouts from './layouts/RootLayouts'
import Dashbord from "./pages/Dashboard"
import Teacher from "./pages/Teacher"
import Student from "./pages/Student"
import About from "./pages/About"
import Salary from "./pages/Salary"
import Createsalary from "./pages/CreateSalary"


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://school-ebon-eight.vercel.app/api/teacher')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setData(data)
      }, [])

  })
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Dashbord />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="student" element={<Student />} />
        <Route path="/teacher/salary" element={<Salary />} />
        <Route path="/:id" element={<Createsalary />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
