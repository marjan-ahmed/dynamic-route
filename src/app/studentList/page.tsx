import Link from 'next/link'
import React from 'react'

function StudentList () {
  return (
    <div>
        <h1 className='text-center'>Student List</h1>
        <h1><Link href={'studentList/Marjan'}>Marjan</Link></h1>
        <h1><Link href={'studentList/Sufyan'}>Sufyan</Link></h1>
        <h1><Link href={'studentList/Abdul-Rehman'}>Abdul Rehman</Link></h1>
        <h1><Link href={'studentList/Ahbdul-Ghani'}>Ahbdul Ghani</Link></h1>
        <h1><Link href={'studentList/Bin-Shuraim'}>Bin Shuraim</Link></h1>
    </div>
  )
}

export default StudentList 