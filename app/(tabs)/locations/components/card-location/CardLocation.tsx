import React from 'react'
import { Location } from '../../models'
import Link from 'next/link'

interface Props{
    location: Location
}

export default function CardLocation({ location }:Props) {
  return (
    <div className='p-3 bg-[#2D2D2D] rounded-md h-full'>
        <Link href={`/locations/${location.id}`} className="text-sm font-semibold hover:text-[#C4DF2B] text-white">{location.name}</Link>
        <p className="text-xs text-muted-foreground">{location.type} - {location.dimension}</p>
        <p className="text-xs text-muted-foreground">{location.residents.length} Characters</p>
    </div>
  )
}
