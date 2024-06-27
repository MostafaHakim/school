import { useEffect, useState } from "react"

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
  return (
    <>
      {data.map(iteam => {
        return (
          <div className="bg-green-600 text-white">
            <h2>{iteam.name}</h2>
            <span>{iteam.age}</span>
          </div>
        )
      })}
    </>
  )
}

export default App
