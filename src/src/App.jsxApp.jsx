import React from 'react'
import BinCard from './components/BinCard'
import Navbar from './components/Navbar'

const binData = [
  {
    title: 'Biodegradable',
    color: 'green',
    desc: 'Includes food waste, paper, garden trimmings. Use green bins.',
  },
  {
    title: 'Recyclable',
    color: 'yellow',
    desc: 'Includes plastic, metal, and glass. Use yellow bins.',
  },
  {
    title: 'Hazardous',
    color: 'red',
    desc: 'Includes batteries, e-waste, chemicals. Use red bins.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold text-indigo-700">
          Waste Segregation Awareness Portal
        </h1>
        <p className="text-gray-600 mt-2">
          Learn how to dispose waste responsibly.
        </p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {binData.map((bin, idx) => (
          <BinCard key={idx} title={bin.title} color={bin.color} desc={bin.desc} />
        ))}
      </main>
      <section className="text-center mt-12">
        <h2 className="text-2xl text-indigo-700 font-semibold">Take the Pledge</h2>
        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
          Join Our Campaign
        </button>
      </section>
    </div>
  )
}

export default App
