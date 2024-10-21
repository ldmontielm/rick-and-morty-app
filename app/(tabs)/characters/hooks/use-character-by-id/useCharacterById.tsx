"use client"

import { useQuery } from "@tanstack/react-query"
import { GetCharacterById } from "../../services"

export default function useCharacterById(id: string) {
    const queryCharacter = useQuery({
        queryKey: ['character', id],
        queryFn: () => GetCharacterById(id)
    })

    return queryCharacter
}
