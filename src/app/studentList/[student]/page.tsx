import React from 'react'

function page({ params }: { params: { student: string} }) {
    console.log(params)
  return (
    <div>
    <div>Student Details</div>
    <h3>Name: {params.student}</h3>
    </div>
  )
}

export default page