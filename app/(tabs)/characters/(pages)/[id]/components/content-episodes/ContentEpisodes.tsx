"use client"

import { Loader } from "lucide-react"
import { useEpisodesByCharacters } from "@/app/(tabs)/episodes/hooks/use-episodes-by-characters"
import { CardEpisode } from "@/app/(tabs)/episodes/components/card-episode"
import { ErrorContent } from "@/components/system/error-content"
import { LoaderContent } from "@/components/system/loader-content"

interface Props{
    episodes: string[]
}

export default function ContentEpisodes({ episodes }:Props) {
    const { data, isLoading, isError, error } = useEpisodesByCharacters(episodes)
    
    if(isError){
        return (
            <ErrorContent content={error.message} />
        )
    }

    if(isLoading){
        return (
            <LoaderContent content='Loading Episodes' />
        )
    }

    return (
        <div className="flex flex-col gap-3">
            {
                Array.isArray(data) ? data?.map((episode) => {
                    return (
                        <CardEpisode key={episode.id} episode={episode} />
                    )
                }) : (
                    <CardEpisode episode={data!} />
                )
            }
        </div>
    )
}
