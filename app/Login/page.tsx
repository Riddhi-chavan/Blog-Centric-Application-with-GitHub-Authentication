import React from 'react'
import Link from 'next/link'
import { Loginbutton } from '../component/Loginbutton'

const page = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-xl mt-11">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Login to See Blogs</h2>
        <p className="text-gray-600 mb-6">Please login with GitHub to access the blog page.</p>
        <Link href="/">
          <Loginbutton  />
        </Link>
      </div>
    </div>
  )
}

export default page
