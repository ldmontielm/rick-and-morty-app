import React from 'react'
import { Character } from '../../models'
import Link from 'next/link'

interface Props{
    character: Character
}


export default function CardCharacter({ character }:Props) {
  return (
    <div key={character.id} className='p-2 rounded-lg bg-[#2D2D2D]'>
        <div className='rounded-md h-52 bg-cover bg-center relative' style={{backgroundImage: `url(${character.image})`}}></div>
        <div className='mt-2'>
            <div className='flex items-center justify-between'>
                <div>
                    <Link className='capitalize font-semibold text-sm hover:text-[#C4DF2B] hover:cursor-pointer text-white' href={`/characters/${character.id}`}>{character.name}</Link>
                    <p className='text-muted-foreground text-[10px]'>From <Link href={`/locations/${character.origin.url.split('/').at(-1)}`} className='hover:text-[#C4DF2B] hover:cursor-pointer text-white'>{character.origin.name}</Link></p>
                </div>
            </div>
            <div className='mt-2'>
                <p className='text-muted-foreground text-[10px]'>Location - <Link href={`/locations/${character.location.url.split('/').at(-1)}`} className='hover:text-[#C4DF2B] hover:cursor-pointer font-medium text-white'>{character.location.name}</Link></p>
            </div>
        </div>
    </div>
  )
}
