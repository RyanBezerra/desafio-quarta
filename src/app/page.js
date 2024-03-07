'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch(
      'https://rickandmortyapi.com/api/character'
    )
    .then((response) => response.json())
    .then((data) => setData(data.results))
    .catch((error) => console.log('error', error))
  }, [])

  console.log(data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#1f2937]">

      <input type = "text" className="W=1/2 p-2 rounded-lg text-center font-bold text-lg" onChange={(e) => setSearch (e.target.value)}></input>
      
      <div className="flex flex-row flex-wrap justify-around gap-10 py-8">
      {data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .map((item) => (
        <div key = {item.id} className="flex flex-col gap-y-5">
          <h2 className="py-5 bg-[#155e75] text-white font-bold text-xl rounded-xl text-center">{item.name}</h2>
          <img src = {item.image} className="rounded-lg"/>
          <p className="text-white text-center font-bold text-base">{item.gender}</p>
        </div>
      ))}
      </div>
    </main>
  );
}
