import { AxiosInstance } from "@/utils";
import { Episode } from "../models";
import { Response } from "@/models";

export const GetEpisodesByCharacters = async (episodes: string[]):Promise<Episode[] | Episode> => {

    const episodes_id:string[] = []

    episodes.map((link) => {
        const split_link = link.split('/')
        episodes_id.push(split_link[split_link.length - 1])
    })

    const { data } = await AxiosInstance.get<Episode[] | Episode>(`/episode/${episodes_id}`)
    return data
}

export const GetAllEpisodes = async (page: number):Promise<Response> => {
    const { data } = await AxiosInstance.get<Response>(`/episode?page=${page}`)
    return data
}

export const GetEpisodeById = async (id: string):Promise<Episode> => {
    const { data } = await AxiosInstance.get<Episode>(`/episode/${id}`)
    return data
}