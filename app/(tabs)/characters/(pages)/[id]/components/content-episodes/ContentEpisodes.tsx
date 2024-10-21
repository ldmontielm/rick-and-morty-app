"use client"

import { Loader } from "lucide-react"
import { useEpisodesByCharacters } from "@/app/(tabs)/episodes/hooks/use-episodes-by-characters"
import { CardEpisode } from "@/app/(tabs)/episodes/components/card-episode"

interface Props{
    episodes: string[]
}

export default function ContentEpisodes({ episodes }:Props) {
    const { data, isLoading, isError, error } = useEpisodesByCharacters(episodes)
    
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
                <p className="text-semibold text-xs">Loading Episodes</p>
            </div>
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
