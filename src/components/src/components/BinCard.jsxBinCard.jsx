import React from 'react'

const colorMap = {
  green: 'text-green-600',
  yellow: 'text-yellow-600',
  red: 'text-red-600',
}

function BinCard({ title, color, desc }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className={`text-2xl font-semibold ${colorMap[color]} mb-2`}>
        {title}
      </h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  )
}

export default BinCard
