"use client"

import { useLocationById } from "../../../../hooks/use-location-by-id"
import { ContentCharacters } from "../content-characters"
import { LoaderContent } from "@/components/system/loader-content"
import { ErrorContent } from "@/components/system/error-content"

interface Props{
    id: string
}

export default function ContentLocation({ id }:Props) {
    const { data, isLoading, isError, error } = useLocationById(id)

    if(isError){
        return (
            <ErrorContent content={error.message} />
        )
    }

    if(isLoading){
        return (
            <LoaderContent content='Loading Location' />
        )
    }


    return (
        <div className='w-full'>
            <div className='flex flex-col gap-2'>
                <div className='py-4'>
                    <p className='text-center text-xl md:text-3xl lg:text-5xl text-white'>{data?.name}</p>
                </div>
                <div>
                    <p className='text-center text-xs md:text-sm text-muted-foreground'>{data?.dimension} - {data?.type}</p>
                </div>
            </div>
            {
                data?.residents.length ?? 0 > 0 ? (
                    <ContentCharacters characters={data?.residents ?? []} />
                ): <div className="w-full p-4 flex flex-col items-center gap-2 text-white">
                    <p className="text-semibold text-xs">Without Characters</p>
                </div>
            }
        </div>
    )
}
