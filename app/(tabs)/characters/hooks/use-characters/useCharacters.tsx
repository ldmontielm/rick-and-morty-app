"use client"

import { useQuery } from "@tanstack/react-query"
import { GetAllCharacters } from "../../services"

export default function useCharacters(page: number){
    const queryCharacters = useQuery({
        queryKey: ['characters', page],
        queryFn: () => GetAllCharacters(page)
    })

    return queryCharacters
}