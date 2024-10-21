"use client"
import React from 'react'
import { useCharacterById } from '@/app/(tabs)/characters/hooks/use-character-by-id'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { ContentEpisodes } from '@/app/(tabs)/characters/(pages)/[id]/components/content-episodes'
import Link from 'next/link'
import { Loader } from 'lucide-react'

interface Props{
    id: string
}

export default function ContentCharacter({ id }:Props) {
    const { data, isLoading, isError, error } = useCharacterById(id)

    const originId = data?.origin?.url?.split('/').at(-1) ?? ''
    const locationId = data?.location?.url?.split('/').at(-1) ?? ''
 
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
                <p className="text-semibold text-xs">Loading Characters</p>
            </div>
        )
    }

    return (
        <div className='text-white'>
            <div className='flex flex-col items-center gap-2'>
                <Avatar className='w-32 h-32'>
                    <AvatarImage src={data?.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <p className='text-lg font-semibold text-white'>{data?.name}</p>
                </div>
                <div>
                    <p className='text-xs text-neutral-400'>{data?.species} - {data?.gender}</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-2 mt-5'>
                <div className='bg-[#2D2D2D] rounded col-span-full md:col-start-1 md:col-end-6 lg:col-end-4 h-fit pb-2'>
                    <div className='border-b border-[#3d3d3d] px-4 pt-4 pb-2'>
                        <p className='font-semibold text-sm'>About</p>
                    </div>
                    <div className='px-4'>
                        <div className='py-3 grid grid-cols-3'>
                            <p className='text-xs font-medium text-white/60 col-span-1'>Status</p>
                            <p className='text-xs font-medium text-white col-start-2 col-end-4'>{data?.status}</p>
                        </div>
                        <div className='py-3 grid grid-cols-3'>
                            <p className='text-xs font-medium text-white/60 col-span-1'>Type</p>
                            <p className='text-xs font-medium text-white col-start-2 col-end-4'>{data?.type ? data?.type : 'unknown'}</p>
                        </div>
                        <div className='py-3 grid grid-cols-3'>
                            <p className='text-xs font-medium text-white/60 col-span-1'>Origin</p>
                            <Link href={`/locations/${originId}`} className='text-xs font-medium text-white col-start-2 col-end-4 hover:text-[#C4DF2B]'>{data?.origin.name}</Link>
                        </div>
                        <div className='py-3 grid grid-cols-3'>
                            <p className='text-xs font-medium text-white/60 col-span-1'>Location</p>
                            <Link href={`/locations/${locationId}`} className='text-xs font-medium text-white col-start-2 col-end-4 hover:text-[#C4DF2B]'>{data?.location.name}</Link>
                        </div>
                        <div className='py-3 grid grid-cols-3'>
                            <p className='text-xs font-medium text-white/60 col-span-1'>Created</p>
                            <p className='text-xs font-medium text-white col-start-2 col-end-4'>{data?.created}</p>
                        </div>
                        <div className='py-3 grid grid-cols-3'>
                            <p className='text-xs font-medium text-white/60 col-span-1'>Episodes</p>
                            <p className='text-xs font-medium text-white col-start-2 col-end-4'>{data?.episode.length} Episode(s)</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-full md:col-start-6 lg:col-start-4 md:col-end-13'>
                {
                    data?.episode?.length ?? 0 > 0 ? (
                        <ContentEpisodes episodes={data?.episode ?? []} />
                    ): <div className="w-full p-4 flex flex-col items-center gap-2 text-white">
                        <p className="text-semibold text-xs">Without Episodes</p>
                    </div>
                }
                    
                </div>
            </div>
        </div>
    )
}
