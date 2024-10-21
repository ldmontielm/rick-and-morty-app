"use client"

import { useQuery } from "@tanstack/react-query"
import { GetLocationById } from "../../services"

export default function useLocationById(id: string) {
    const queryLocation = useQuery({
        queryKey: ['location', id],
        queryFn: () => GetLocationById(id)
    })
    
    return queryLocation
}
