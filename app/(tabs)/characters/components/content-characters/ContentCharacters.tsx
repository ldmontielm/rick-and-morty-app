"use client"
import React from 'react'
import { useCharacters } from '@/app/(tabs)/characters/hooks/use-characters'
import { CardCharacter } from '../card-character'
import { useSearchParams } from 'next/navigation'
import BlurFade from '@/components/ui/blur-fade'
import { Character } from '../../models'
import { Paginator } from '@/components/system/paginator'
import { Loader } from 'lucide-react'
import { LoaderContent } from '@/components/system/loader-content'

export default function ContentCharacters() {
    const params = useSearchParams()
    const { data, isLoading, isError, error } = useCharacters(Number(params.get('page') || "1")!) 

    if(isError){
        return (
            <div className="w-full p-4 flex flex-col items-center gap-2">
                <p className="text-semibold text-xs">{error.message}</p>
            </div>
        )
    }

    if(isLoading){
        return (
            <LoaderContent content='Loading Characters' />
        )
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                {
                    data?.results.map((character, idx) => (
                        <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                            <CardCharacter character={character as Character} />
                        </BlurFade>
                    ))
                }
            </div>
            <Paginator quantity={data?.info.pages ?? 0} />
        </div>
    )
}
