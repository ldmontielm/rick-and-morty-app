"use client"

import React from 'react'
import { useCharactersByEpisode } from '@/app/(tabs)/characters/hooks/use-characters-by-episode'
import { Loader } from 'lucide-react'
import BlurFade from '@/components/ui/blur-fade'
import { CardCharacter } from '@/app/(tabs)/characters/components/card-character'
import { Character } from '@/app/(tabs)/characters/models'

interface Props{
  characters: string[]
}

export default function ContentCharacters({ characters }:Props) {
  const { data, isLoading, isError, error } = useCharactersByEpisode(characters)
  
  if(isError){
    return (
        <div className="w-full p-4 flex flex-col items-center gap-2">
            <p className="text-semibold text-xs">{error.message}</p>
        </div>
    )
  }

  if(isLoading){
      return (
          <div className="w-full p-4 flex flex-col items-center gap-2 text-white">
              <Loader size={18} className="animate-spin" />
              <p className="text-semibold text-xs">Loading Episode</p>
          </div>
      )
  }
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-10'>
        {
            Array.isArray(data) ? data?.map((character, idx) => (
                <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                    <CardCharacter character={character as Character} />
                </BlurFade>
            )): (
              <BlurFade delay={0.25 * 0.05} inView>
                    <CardCharacter character={data as Character} />
              </BlurFade>
            )
        }
    </div>
  )
}
