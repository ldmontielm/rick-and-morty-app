import { Episode } from "@/app/(tabs)/episodes/models"
import { Character } from "@/app/(tabs)/characters/models"
import { Location } from "@/app/(tabs)/locations/models"

export interface Info {
    count: number
    pages: number
    next: string
    prev: any
}

export interface Response {
    info: Info
    results: Character[] | Episode[] | Location[]
}
  