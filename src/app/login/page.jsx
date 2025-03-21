'use client'

import Link from "next/link";

const login = () => {
  return(
    <div className="text-center mt-[20vh]">
            <h1 className="text-5xl font-bold text-white mb-2 animate-title">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Admin Dashboard 
               </span>
            </h1>
            <p className="mt-5 text-[0.8rem] text-blue-200">
            {'Designed by "Nandan R"'}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 mb-10">
              <Link
                href="/members-list"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                View Members
              </Link>
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-gray-700 text-white rounded-lg"
              >
                Add Members
              </Link>
              <Link
                href="/"
                className="px-4 py-2 bg-red-700 text-white rounded-lg font-medium"
              >
                Logout
              </Link>
            </div>
            
        </div>
  )
}

export default login;