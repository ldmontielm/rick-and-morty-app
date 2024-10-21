"use client"

import React from 'react'
import { useCharactersByEpisode } from '@/app/(tabs)/characters/hooks/use-characters-by-episode'
import BlurFade from '@/components/ui/blur-fade'
import { CardCharacter } from '@/app/(tabs)/characters/components/card-character'
import { Character } from '@/app/(tabs)/characters/models'
import { LoaderContent } from '@/components/system/loader-content'
import { ErrorContent } from '@/components/system/error-content'

interface Props{
  characters: string[]
}

export default function ContentCharacters({ characters }:Props) {
  const { data, isLoading, isError, error } = useCharactersByEpisode(characters)

  if(isError){
    return (
      <ErrorContent content={error.message} />
    )
  }

  if(isLoading){
    return (
      <LoaderContent content='Loading Characters' />
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
