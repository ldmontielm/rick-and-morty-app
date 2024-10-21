"use client"
import React from 'react'
import { useEpisodeById } from '@/app/(tabs)/episodes/hooks/use-episode-by-id'
import { Loader } from 'lucide-react'
import { ContentCharacters } from '../content-characters'

interface Props{
    id: string
}
export default function ContentEpisode({ id }:Props) {
    const { data, isLoading, isError, error } = useEpisodeById(id)

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
        <div className='w-full'>
            <div className='flex flex-col gap-2'>
                <div className='py-4'>
                    <p className='text-center text-xl md:text-3xl lg:text-5xl text-white'>{data?.name}</p>
                </div>
                <div>
                    <p className='text-center text-xs md:text-sm text-muted-foreground'>{data?.episode} - {data?.air_date}</p>
                </div>
            </div>
            {
                data?.characters.length ?? 0 > 0 ? (
                    <ContentCharacters characters={data?.characters ?? []} />
                ): <div className="w-full p-4 flex flex-col items-center gap-2 text-white">
                    <p className="text-semibold text-xs">Without Characters</p>
                </div>
            }
        </div>
    )
}
