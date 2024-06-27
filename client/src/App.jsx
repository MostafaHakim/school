import { useEffect } from "react"

function App() {
  useEffect(() => {
    fetch('https://school-ebon-eight.vercel.app/api/teacher')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      }, [])

  })
  return (
    <>
      <div className="bg-green-600 text-white">
        <h2>Name</h2>
        <span>age</span>
      </div>
    </>
  )
}

export default App
