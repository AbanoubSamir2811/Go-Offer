"use client"
import React from 'react'

function AuthLayout({children}) {
  return (
    <div className='flex h-[100vh]'>
        {children}
    </div>
  )
}

export default AuthLayout