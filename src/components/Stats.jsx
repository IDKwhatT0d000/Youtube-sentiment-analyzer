import React from 'react'

const Stats = (props) => {
    const values=props.scores
  return (
    <div className="flex justify-center items-center">
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Stats</h2>
        <div className="grid grid-cols-4 gap-10">
          <div>
            <p className="text-sm text-gray-600">overallScore</p>
            <p className="text-xl font-semibold">{values[0]*100}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">positiveScore</p>
            <p className="text-xl font-semibold">{values[1]*100}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">negativeScore</p>
            <p className="text-xl font-semibold">{values[2]*100}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">neutralScore</p>
            <p className="text-xl font-semibold">{values[3]*100}</p>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Stats