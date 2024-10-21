"use client"

import { GetEpisodeById } from '../../services'
import { useQuery } from '@tanstack/react-query'

export default function useEpisodeById(id: string) {
    const queryEpisode = useQuery({
        queryKey: ['episode', id],
        queryFn: () => GetEpisodeById(id)
    })
    return queryEpisode
}
