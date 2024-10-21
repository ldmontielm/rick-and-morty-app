"use client"

import { GetCharactersByEpisode } from '../../services'
import { useQuery } from '@tanstack/react-query'

export default function useCharactersByEpisode(characters: string[]) {
    const queryCharactes = useQuery({
        queryKey: ['characters', characters],
        queryFn: () => GetCharactersByEpisode(characters),
        enabled: characters.length >= 1
    })

    return queryCharactes
}
