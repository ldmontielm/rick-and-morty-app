import { AxiosInstance } from "@/utils";
import { Response } from "@/models";
import { Location } from "../models";

export const GetAllLocations = async (page: number):Promise<Response> => {
    const { data } = await AxiosInstance.get<Response>(`/location?page=${page}`)
    return data
}

export const GetLocationById = async (id: string):Promise<Location> => {
    const { data } = await AxiosInstance.get<Location>(`/location/${id}`)
    return data
}