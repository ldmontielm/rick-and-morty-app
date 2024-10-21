import { AxiosInstance } from "@/utils";
import { Response } from "@/models";
import { Character } from "../models";

export const GetAllCharacters = async (page: number):Promise<Response> => {
    const { data } = await AxiosInstance.get<Response>(`/character?page=${page}`)
    return data
}

export const GetCharacterById = async (id: string):Promise<Character> => {
    const { data } = await AxiosInstance.get<Character>(`/character/${id}`)
    return data
}

export const GetCharactersByEpisode = async (characters: string[]):Promise<Character[] | Character> => {

    const characters_id:string[] = []

    characters.map((link) => {
        const split_link = link.split('/')
        characters_id.push(split_link[split_link.length - 1])
    })

    const { data } = await AxiosInstance.get<Character[] | Character>(`/character/${characters_id}`)
    return data
}