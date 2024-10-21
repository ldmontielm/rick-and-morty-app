"use client"

import { useQuery } from "@tanstack/react-query"
import { GetEpisodesByCharacters } from "../../services"


export default function useEpisodesByCharacters(episodes: string[]) {
    const queryEpisodes = useQuery({
        queryKey: ['episodes', episodes],
        queryFn: () => GetEpisodesByCharacters(episodes),
        enabled: episodes.length >= 1
    })

    return queryEpisodes
}
