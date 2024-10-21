"use client"
import React from 'react'
import Link from 'next/link'
import { Logo } from '../logo'
import { usePathname } from 'next/navigation'


export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className='w-full px-4 py-5'>
      <div className='flex items-center justify-between max-w-6xl mx-auto px-4'>
        <Link className='font-bold text-[#C4DF2B]' href={"/"}>
          <Logo />
        </Link>
        <div className='flex items-center gap-4'>
          <Link href={"/characters"} className={`text-sm hover:text-white ${pathname === "/characters" || pathname === "/" ? 'font-semibold text-[#C4DF2B] tetx-sm' : 'text-neutral-300'}`}>Characters</Link>
          <Link href={"/episodes"} className={`text-sm hover:text-white ${pathname === "/episodes" ? 'font-semibold text-[#C4DF2B]' : 'text-neutral-300'}`}>Episodes</Link>
          <Link href={"/locations"} className={`text-sm hover:text-white ${pathname === "/locations" ? 'font-semibold text-[#C4DF2B]' : 'text-neutral-300'}`}>Locations</Link>
        </div>
      </div>
    </div>

  )
}
