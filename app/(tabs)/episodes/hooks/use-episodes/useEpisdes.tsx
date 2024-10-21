"use client"

import { useQuery } from "@tanstack/react-query"
import { GetAllEpisodes } from "../../services"

export default function useEpisodes(page:number) {
    const queryEpisodes = useQuery({
        queryKey: ['episodes', page],
        queryFn: () => GetAllEpisodes(page),
    })

    return queryEpisodes
}
