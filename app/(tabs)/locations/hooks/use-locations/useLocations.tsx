"use client"

import { useQuery } from '@tanstack/react-query'
import { GetAllLocations } from '../../services'

export default function useLocations(page: number) {
    const queryLocations = useQuery({
        queryKey: ['locations', page],
        queryFn: () => GetAllLocations(page)
    })

    return queryLocations
}
